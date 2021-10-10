import type { NextPage } from 'next'
import tw, { css } from 'twin.macro';
import { TextSm, TextMd, TextXl } from '@components/Texts';
import NavBar from '@components/NavBar';
import Wave from '@images/wave.svg';
import Layout from 'src/common/layouts/layout';
import Card from '@components/Card';
import Intro from '@components/Intro';

const Home: NextPage = () => {
  return (
  <Layout>   
    <main tw="flex flex-col">
        <NavBar />
        <Intro />
    </main>
    <section>
      <Card />
      <div css={[`
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          overflow: hidden;
          line-height: 0;
          z-index: 1;
      `]}>
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"
            fill="#6184D8"></path>
        </svg>
      </div>
    </section>
  </Layout>
  )
}

export default Home
