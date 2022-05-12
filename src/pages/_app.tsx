import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import store from '../app/store';
import ModalManager from '../components/ModalManager';
import GlobalStyle from '../GlobalStyle';

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <ChakraProvider>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <GlobalStyle />
          <Component {...pageProps} />
          <ModalManager />
        </QueryClientProvider>
      </Provider>
    </ChakraProvider>
  );
}

export default MyApp;
