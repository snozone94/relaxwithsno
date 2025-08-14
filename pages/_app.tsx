import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import { useRouter } from 'next/router';
import '../styles/globals.css';
import Layout from '../components/Layout';

/**
 * Custom top‑level App component for the RelaxWithSno platform.  It
 * wraps most pages in a Layout component that provides a navbar and
 * sidebar.  The index and age‑gate pages are excluded from the
 * layout to provide a focused landing and age verification
 * experience.
 */
export default function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const router = useRouter();
  // Define routes that should not use the default layout
  const noLayoutRoutes = ['/', '/age-gate'];

  return (
    <SessionProvider session={session}>
      {noLayoutRoutes.includes(router.pathname) ? (
        <Component {...pageProps} />
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </SessionProvider>
  );
}