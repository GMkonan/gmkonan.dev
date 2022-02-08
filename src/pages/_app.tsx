import type { AppProps } from 'next/app'
import Head from 'next/head'
import Footer from '@components/Footer';
import GlobalStyles from '@components/GlobalStyles';
import NavBar from '@components/NavBar';
import { useTheme } from 'src/store/Theme';
import { ThemeProvider } from 'next-themes'
import { darkTheme, lightTheme } from 'src/themes';

function MyApp({ Component, pageProps }: AppProps) {

   //const theme = useTheme(state => state.theme)
   //const colorTheme = theme == 'light' ? lightTheme : darkTheme

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
