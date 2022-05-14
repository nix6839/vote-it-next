import {
  Button,
  FormControl,
  FormErrorMessage,
  IconButton,
  Input,
  VStack,
} from '@chakra-ui/react';
import styled from '@emotion/styled';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Icon from 'phosphor-react';
import { MouseEventHandler, useCallback } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import * as yup from 'yup';
import { useAppDispatch } from '../app/hooks';
import { hideModal } from '../app/modalSlice';
import * as AuthRequest from '../lib/request/AuthRequest';

const ModalOverlay = styled.div({
  position: 'fixed',
  top: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgb(0 0 0 / 20%)',
  backdropFilter: 'brightness(50%)',
  zIndex: 'var(--z-index-modal)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const StyledModal = styled.section({
  backgroundColor: '#fff',
  padding: '16px',
  display: 'flex',
  flexDirection: 'column',
  borderRadius: '10px',
});

type Inputs = {
  email: string;
  password: string;
  nickname: string;
};

const schema: yup.SchemaOf<Inputs> = yup.object({
  email: yup
    .string()
    .required('이메일이 필요합니다.')
    .email('이메일 형식이 아닙니다.'),
  password: yup
    .string()
    .required('비밀번호가 필요합니다.')
    .min(8, '비밀번호는 8자 이상이어야 합니다.')
    .max(128, '비밀번호는 128자 이하여야 합니다.')
    .matches(/[ -~]/),
  nickname: yup
    .string()
    .required('닉네임이 필요합니다.')
    .min(4, '닉네임은 4자 이상이어야 합니다.')
    .max(14, '닉네임은 14자 이하여야 합니다.'),
});

export default function SignUpModal() {
  const dispatch = useAppDispatch();
  const { register, handleSubmit, formState } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });
  const signUpMutation = useMutation(
    ['signupUser'],
    ({ email, password, nickname }: Inputs) =>
      AuthRequest.signUp(email, password, nickname),
  );

  const handleClickOutside = useCallback(() => {
    dispatch(hideModal());
  }, [dispatch]);

  const handleClickCloseButton = useCallback(() => {
    dispatch(hideModal());
  }, [dispatch]);

  const handleClickModal = useCallback<MouseEventHandler<HTMLDivElement>>(
    (e) => {
      e.stopPropagation();
    },
    [],
  );

  const handleFormSubmit = useCallback<SubmitHandler<Inputs>>(
    async ({ email, password, nickname }) => {
      signUpMutation.mutate({
        email,
        password,
        nickname,
      });
    },
    [signUpMutation],
  );

  return (
    <ModalOverlay onClick={handleClickOutside}>
      <StyledModal onClick={handleClickModal}>
        <IconButton
          aria-label="모달 창 닫기"
          onClick={handleClickCloseButton}
          variant="ghost"
          alignSelf="flex-end"
        >
          <Icon.X size={20} />
        </IconButton>
        <VStack
          as="form"
          onSubmit={handleSubmit(handleFormSubmit)}
          noValidate
          paddingX={12}
          paddingTop={4}
          paddingBottom={6}
          spacing={4}
        >
          <FormControl
            isInvalid={formState.errors.email !== undefined}
            isRequired
          >
            <Input
              {...register('email')}
              type="email"
              placeholder="이메일"
              variant="flushed"
            />
            <FormErrorMessage>
              {formState.errors.email?.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl
            isInvalid={formState.errors.password !== undefined}
            isRequired
          >
            <Input
              {...register('password')}
              type="password"
              placeholder="비밀번호"
              variant="flushed"
            />
            <FormErrorMessage>
              {formState.errors.password?.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl
            isInvalid={formState.errors.nickname !== undefined}
            isRequired
          >
            <Input
              {...register('nickname')}
              type="text"
              placeholder="닉네임"
              variant="flushed"
            />
            <FormErrorMessage>
              {formState.errors.nickname?.message}
            </FormErrorMessage>
          </FormControl>
          <Button
            type="submit"
            isLoading={signUpMutation.isLoading}
            loadingText="회원가입 중..."
            width="full"
          >
            회원가입
          </Button>
        </VStack>
      </StyledModal>
    </ModalOverlay>
  );
}
