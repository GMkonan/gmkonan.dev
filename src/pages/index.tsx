import type { NextPage } from 'next'
import Hero from '@components/Hero'
import Main from '@components/Main'
import Head from 'next/head'

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>GMKonan DEV</title>
                <meta name="title" content="GMKonan DEV" />
                <meta
                    name="description"
                    content="Hello and welcome to my website :) you can check some info about me, what I do and what I know or go straight to my articles section!"
                />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://gmkonan.dev" />
                <meta property="og:title" content="GMKonan DEV" />
                <meta
                    property="og:description"
                    content="Hello and welcome to my website :) you can check some info about me, what I do and what I know or go straight to my articles section!"
                />
                <meta
                    property="og:image"
                    content="https://gmkonan.dev/website-image.png"
                />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://gmkonan.dev" />
                <meta property="twitter:title" content="GMKonan DEV" />
                <meta
                    property="twitter:description"
                    content="Hello and welcome to my website :) you can check some info about me, what I do and what I know or go straight to my articles section!"
                />
                <meta
                    property="twitter:image"
                    content="https://gmkonan.dev/website-image.png"
                />
            </Head>
            <Main />
            <Hero />
            {/*<Projects />*/}
        </>
    )
}

export default Home
