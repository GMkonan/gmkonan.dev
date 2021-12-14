import type { AppProps } from 'next/app'
import GlobalStyles from '../components/GlobalStyles';
import NavBar from '../components/NavBar';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <NavBar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
