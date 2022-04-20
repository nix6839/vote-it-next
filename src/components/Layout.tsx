import { ReactNode } from 'react';
import styled from 'styled-components';
import SiteFooter from './SiteFooter';
import SiteHeader from './SiteHeader';

const Main = styled.main`
  flex-grow: 1;
`;

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <SiteHeader />
      <Main>{children}</Main>
      <SiteFooter />
    </>
  );
}
