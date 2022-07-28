import type { NextPage } from 'next'
import Hero from '@components/Hero'
import Main from '@components/Main'
import Projects from '@components/Projects'
import Head from 'next/head'
import handleViewport from 'react-in-viewport'

const ViewPortHero = handleViewport(Hero /** options: {}, config: {} **/)

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>GMkonan DEV</title>
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

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:url" content="https://gmkonan.dev" />
                <meta name="twitter:title" content="GMKonan DEV" />
                <meta
                    name="twitter:description"
                    content="Hello and welcome to my website :) you can check some info about me, what I do and what I know or go straight to my articles section!"
                />
                <meta
                    name="twitter:image"
                    content="https://gmkonan.dev/website-image.png"
                />
            </Head>
            <Main />
            <ViewPortHero />
            {/* <Projects /> */}
        </>
    )
}

export default Home
