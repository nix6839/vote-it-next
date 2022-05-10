import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';
import * as Icon from 'phosphor-react';
import { useCallback } from 'react';
import { useAppDispatch } from '../app/hooks';
import { showModal } from '../app/modalSlice';
import Button from './Button';
import IconButton from './IconButton';
import MainButton from './MainButton';

const LoginButton = styled(Button)({
  '&:hover': {
    color: 'var(--main-color)',
  },
});

const ModalButtonContainer = styled.div({
  display: 'flex',
  gap: '6px',
  button: {
    padding: '8px 10px',
    fontSize: '15px',
  },
});

const RightContainer = styled.div({
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
  '> button': {
    padding: '8px',
    borderRadius: '50%',
    '&:hover': {
      backgroundColor: 'var(--main-color)',
    },
  },
});

const HeaderContainer = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  maxWidth: '1200px',
  margin: '0 auto',
});

const Header = styled.header({
  position: 'sticky',
  backgroundColor: 'var(--bg-header)',
  boxShadow: '3px 3px 8px #b8b8b8',
  padding: '4px 16px',
  top: 0,
  zIndex: 'var(--z-index-header)',
});

export default function SiteHeader() {
  const dispatch = useAppDispatch();

  const handleSignUpButtonClick = useCallback(() => {
    dispatch(showModal());
  }, [dispatch]);

  return (
    <Header>
      <HeaderContainer>
        <Link href="/">
          <Image
            src="/header-logo-light.webp"
            alt="사이트 로고"
            width={80}
            height={32}
          />
        </Link>
        <RightContainer>
          <IconButton aria-label="테마 변경">
            <Icon.Sun size={20} weight="fill" color="#fcd404" />
          </IconButton>
          <ModalButtonContainer>
            <LoginButton type="button">로그인</LoginButton>
            <MainButton type="button" onClick={handleSignUpButtonClick}>
              회원가입
            </MainButton>
          </ModalButtonContainer>
        </RightContainer>
      </HeaderContainer>
    </Header>
  );
}
