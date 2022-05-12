import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';
import SiteFooter from './SiteFooter';
import SiteHeader from './SiteHeader';

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <SiteHeader />
      <Box as="main" flexGrow={1}>
        {children}
      </Box>
      <SiteFooter />
    </>
  );
}
