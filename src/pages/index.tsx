import type { NextPage } from 'next'
import tw, { css } from 'twin.macro';

const Title = tw.h1`text-white text-4xl mt-20 ml-20 whitespace-pre-line leading-loose font-bold tracking-widest text-green-500`;

const Home: NextPage = () => {
  return (
    <>
    <style global jsx>{`
    html,
    body,
    #__next {
      height: 100vh;
      overflow: hidden;
      margin: 0;
      padding: 0;
      font-family: Inter;
      background-color: #f5f5f5;
    }
    `}</style>
    <div tw="flex h-full w-full relative">
      <div tw="bg-white shadow-xl flex w-full h-16 fixed z-20">
        {/* NavBar */}
      </div>
      <div tw="flex items-center" css={[`
      	background-color: #1D1F21;
        width: 100%;
        clip-path: polygon(0 42%, 53% 0, 100% 0, 100% 35%, 25% 100%, 0 100%);
        position: relative;
      `]}>
        <Title>
          I’m Konan, a Creative {"\n"}
          {'&'} Self-learning {"\n"}
          Developer
        </Title>
      </div>
    </div>
    </>
  )
}

export default Home
