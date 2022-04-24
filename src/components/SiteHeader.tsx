import Image from 'next/image';
import * as Icon from 'phosphor-react';
import styled from 'styled-components';
import Button from './atoms/Button';
import IconButton from './IconButton';
import LinkTo from './LinkTo';
import MainButton from './MainButton';

const LoginButton = styled(Button)`
  &:hover {
    color: var(--main-color);
  }
`;

const ModalButtonContainer = styled.div`
  display: flex;
  gap: 6px;
  button {
    padding: 8px 10px;
    font-size: 15px;
  }
`;

const RightContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  > button {
    padding: 8px;
    border-radius: 50%;
    &:hover {
      background-color: var(--main-color);
    }
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = styled.header`
  position: sticky;
  background-color: var(--bg-header);
  box-shadow: 3px 3px 8px #b8b8b8;
  padding: 4px 16px;
  top: 0;
  z-index: 10000;
`;

export default function SiteHeader() {
  return (
    <Header>
      <HeaderContainer>
        <LinkTo href="/">
          <Image
            src="/header-logo-light.webp"
            alt="사이트 로고"
            width={80}
            height={32}
          />
        </LinkTo>
        <RightContainer>
          <IconButton aria-label="테마 변경">
            <Icon.Sun size={20} weight="fill" color="#fcd404" />
          </IconButton>
          <ModalButtonContainer>
            <LoginButton>로그인</LoginButton>
            <MainButton>회원가입</MainButton>
          </ModalButtonContainer>
        </RightContainer>
      </HeaderContainer>
    </Header>
  );
}
