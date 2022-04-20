import Image from 'next/image';
import * as Icon from 'phosphor-react';
import styled from 'styled-components';
import Button from './atoms/Button';
import IconButton from './IconButton';
import LinkTo from './LinkTo';

const LinkToIndex = styled(LinkTo).attrs({ href: '/' })`
  line-height: 0;
`;

const ModalButtonContainer = styled.div`
  display: flex;
  button {
    padding: 8px;
    font-size: 15px;
    &:hover {
      color: var(--main-color);
    }
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
  padding: 8px 16px;
`;

export default function SiteHeader() {
  return (
    <Header>
      <HeaderContainer>
        <LinkToIndex>
          <Image
            src="/header-logo-light.png"
            alt="사이트 로고"
            width={80}
            height={32}
          />
        </LinkToIndex>
        <RightContainer>
          <IconButton aria-label="테마 변경">
            <Icon.Sun size={20} weight="fill" color="#fcd404" />
          </IconButton>
          <ModalButtonContainer>
            <Button>로그인</Button>
            <Button>회원가입</Button>
          </ModalButtonContainer>
        </RightContainer>
      </HeaderContainer>
    </Header>
  );
}
