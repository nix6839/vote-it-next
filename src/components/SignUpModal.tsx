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
import IconButton from './IconButton';
import MainButton from './MainButton';

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

const CloseButton = styled(IconButton)({
  alignSelf: 'flex-end',
});

const Input = styled.input({
  textAlign: 'center',
  border: '3px solid var(--border-modal-input)',
  fontSize: '16px',
  padding: '10px',
  outlineStyle: 'none',

  '&:focus': {
    borderColor: 'var(--main-color)',
  },

  "&[aria-invalid='true']": {
    borderColor: 'var(--border-modal-input-error)',
  },
});

const ErrorMessage = styled.strong({
  textAlign: 'center',
  fontSize: '14px',
  color: 'var(--text-error)',
});

const InputLabel = styled.label({
  display: 'flex',
  flexDirection: 'column',
  gap: '3px',
});

const SubmitButton = styled(MainButton)({
  padding: '10px',
  fontSize: '14px',
  width: '100%',

  '&:disabled': {
    backgroundColor: 'var(--main-color-hover)',
    cursor: 'wait',
  },
});

const SignUpFieldSet = styled.fieldset({
  display: 'flex',
  flexDirection: 'column',
  padding: '30px 40px',
  gap: '20px',
  border: 'none',
});

type Inputs = {
  email: string;
  password: string;
  nickname: string;
};

const schema: yup.SchemaOf<Inputs> = yup.object({
  email: yup
    .string()
    .required('???????????? ???????????????.')
    .email('????????? ????????? ????????????.'),
  password: yup
    .string()
    .required('??????????????? ???????????????.')
    .min(8, '??????????????? 8??? ??????????????? ?????????.')
    .max(128, '??????????????? 128??? ???????????? ?????????.')
    .matches(/[ -~]/),
  nickname: yup
    .string()
    .required('???????????? ???????????????.')
    .min(4, '???????????? 4??? ??????????????? ?????????.')
    .max(14, '???????????? 14??? ???????????? ?????????.'),
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
        <CloseButton aria-label="?????? ??? ??????" onClick={handleClickCloseButton}>
          <Icon.X size={20} />
        </CloseButton>
        <form onSubmit={handleSubmit(handleFormSubmit)} noValidate>
          <SignUpFieldSet disabled={signUpMutation.isLoading}>
            <InputLabel>
              <Input
                {...register('email')}
                type="email"
                placeholder="?????????"
                required
                aria-invalid={formState.errors.email !== undefined}
              />
              <ErrorMessage>{formState.errors.email?.message}</ErrorMessage>
            </InputLabel>
            <InputLabel>
              <Input
                {...register('password')}
                type="password"
                placeholder="????????????"
                required
                aria-invalid={formState.errors.password !== undefined}
              />
              <ErrorMessage>{formState.errors.password?.message}</ErrorMessage>
            </InputLabel>
            <InputLabel>
              <Input
                {...register('nickname')}
                type="text"
                placeholder="?????????"
                required
                aria-invalid={formState.errors.nickname !== undefined}
              />
              <ErrorMessage>{formState.errors.nickname?.message}</ErrorMessage>
            </InputLabel>
            <SubmitButton type="submit">
              ???????????? {signUpMutation.isLoading && '???...'}
            </SubmitButton>
          </SignUpFieldSet>
        </form>
      </StyledModal>
    </ModalOverlay>
  );
}
