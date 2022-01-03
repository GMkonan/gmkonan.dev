import type { AppProps } from 'next/app'
import Head from 'next/head'
import Footer from '../components/Footer';
import GlobalStyles from '../components/GlobalStyles';
import NavBar from '../components/NavBar';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>GMkonan</title>
      </Head>
      <GlobalStyles />
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp
