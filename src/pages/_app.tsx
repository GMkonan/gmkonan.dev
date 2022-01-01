import type { AppProps } from 'next/app'
import Footer from '../components/Footer';
import GlobalStyles from '../components/GlobalStyles';
import NavBar from '../components/NavBar';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp
