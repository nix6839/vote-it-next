import {
  Button,
  FormControl,
  FormErrorMessage,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  ModalProps,
  VStack,
} from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useCallback } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import * as yup from 'yup';
import * as AuthRequest from '../lib/request/AuthRequest';

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

export default function SignUpModal(props: Omit<ModalProps, 'children'>) {
  const { register, handleSubmit, formState } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });
  const signUpMutation = useMutation(
    ['signupUser'],
    ({ email, password, nickname }: Inputs) =>
      AuthRequest.signUp(email, password, nickname),
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
    <Modal size="sm" isCentered {...props}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>회원가입</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack
            as="form"
            onSubmit={handleSubmit(handleFormSubmit)}
            noValidate
            paddingX={8}
            paddingBottom={6}
            spacing={6}
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
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
