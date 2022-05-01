import * as Icon from 'phosphor-react';
import { FormEventHandler, MouseEventHandler, useCallback } from 'react';
import styled from 'styled-components';
import { useAppDispatch } from '../app/hooks';
import { hideModal } from '../app/modalSlice';
import IconButton from './IconButton';
import MainButton from './MainButton';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  backdrop-filter: brightness(50%);
  z-index: var(--z-index-modal);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledModal = styled.section`
  background-color: #fff;
  padding: 16px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
`;

const CloseButton = styled(IconButton)`
  align-self: flex-end;
`;

const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 30px 40px;
  gap: 20px;
`;

const Input = styled.input`
  text-align: center;
  border: 1px solid var(--border-modal-input);
  font-size: 16px;
  padding: 10px;
  outline-style: none;

  &:focus {
    border-color: var(--main-color);
  }
`;

const SubmitButton = styled(MainButton)`
  padding: 10px;
  font-size: 14px;
`;

export default function SignUpModal() {
  const dispatch = useAppDispatch();

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

  const handleFormSubmit = useCallback<FormEventHandler<HTMLFormElement>>(
    (e) => {
      e.preventDefault();
    },
    [],
  );

  return (
    <ModalOverlay onClick={handleClickOutside}>
      <StyledModal onClick={handleClickModal}>
        <CloseButton aria-label="모달 창 닫기" onClick={handleClickCloseButton}>
          <Icon.X size={20} />
        </CloseButton>
        <SignUpForm onSubmit={handleFormSubmit} noValidate>
          <Input type="email" placeholder="이메일" required />
          <Input type="text" placeholder="닉네임" required />
          <Input type="password" placeholder="비밀번호" required />
          <SubmitButton type="submit">회원가입</SubmitButton>
        </SignUpForm>
      </StyledModal>
    </ModalOverlay>
  );
}
