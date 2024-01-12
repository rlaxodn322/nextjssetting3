import '../styles/globals.css';
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { AppProps } from 'next/app';
import PageWithLayoutType from '../types/pageWithLayout';
import { ReactElement } from 'react';
import { RecoilRoot } from 'recoil';

type AppLayoutProps = AppProps & {
  Component: PageWithLayoutType;
  pageProps: any;
};

const MyApp = ({ Component, pageProps }: AppLayoutProps) => {
  const Layout = Component.layout || ((children: ReactElement) => <>{children}</>);

  const queryClient = new QueryClient();

  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Hydrate>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </RecoilRoot>
  );
};

export default MyApp;
