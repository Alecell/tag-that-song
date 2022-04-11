import { QueryClientProvider } from 'react-query';

import type { AppProps } from 'next/app';

import { Global, ThemeProvider } from '@emotion/react';
import { queryClient } from '~config/react-query';
import { theme } from '~config/theme';

import { normalize } from '~styles/normalize';

function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Global styles={normalize()} />
        <Component {...pageProps} />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
