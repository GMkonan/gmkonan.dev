import type { NextPage } from 'next'
import tw, { css } from 'twin.macro';
import styled from 'styled-components';
import { TextSm, TextMd, TextXl } from '@components/Texts';
import NavBar from '@components/NavBar';
import Layout from 'src/common/layouts/layout';
import Card from '@components/Card';
import Intro from '@components/Intro';

const Wave = styled.section`
  position: absolute;
  width: 100%;
  line-height: 0;
`;

const Home: NextPage = () => {
  return (
  <Layout>
    <main css={['margin: 0 auto; width: 1000px']}>
        <NavBar />
        <Intro />
    </main>
    <section>
      
    </section>
  </Layout>
  );
}

export default Home
