import type { AppProps } from 'next/app'
import Head from 'next/head'
import Footer from '@components/Footer';
import GlobalStyles from '@components/GlobalStyles';
import NavBar from '@components/NavBar';
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <>
    <GlobalStyles />
      <ThemeProvider>
        <Head>
          <title>GMkonan</title>
        </Head>
        <NavBar />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default MyApp
