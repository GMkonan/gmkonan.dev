import type { AppProps } from 'next/app'
import Head from 'next/head'
import Footer from '@components/Footer'
import GlobalStyles from '@components/GlobalStyles'
import NavBar from '@components/NavBar'
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }: AppProps) {
    // Fix until they fix this type issues in React 18
    //https://github.com/styled-components/styled-components/issues/3738
    const GlobalStyleProxy: any = GlobalStyles
    return (
        <>
            <GlobalStyleProxy />
            <ThemeProvider>
                <Head>
                    <title>GMkonan</title>
                </Head>
                <NavBar />
                <Component {...pageProps} />
                <Footer />
            </ThemeProvider>
        </>
    )
}

export default MyApp
