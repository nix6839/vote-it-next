import type { AppProps } from 'next/app';
import { createGlobalStyle } from 'styled-components';
import Pretendard from '../styles/PretendardFont';
import ResetStyle from '../styles/ResetStyle';

const GlobalStyle = createGlobalStyle`
  ${ResetStyle}
  ${Pretendard}
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
