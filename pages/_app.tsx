import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import '@/styles/globals.css';

/**
 * Custom top‑level App component for the relaxwithsno platform.
 * You can extend this component to include global providers such as
 * NextAuth's SessionProvider.  This file also imports a global
 * stylesheet from the styles directory.
 */
export default function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}
