import styled from 'styled-components';

const HeaderContainer = styled.div``;

const Header = styled.header`
  position: sticky;
  background-color: var(--bg-header);
  background-color: var(--text1);
`;

export default function SiteHeader() {
  return (
    <Header>
      <HeaderContainer>헤더입니다.</HeaderContainer>
    </Header>
  );
}
