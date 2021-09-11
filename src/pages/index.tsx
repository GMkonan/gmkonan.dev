import type { NextPage } from 'next'
import tw, { css } from 'twin.macro';
import { TextSm, TextMd, TextXl } from '@components/Texts';

const Home: NextPage = () => {
  return (
    <>
    <style global jsx>{`
    html,
    body,
    #__next {
      height: 100vh;
      width: 100%;
      overflow: hidden;
      margin: 0;
      padding: 0;
      font-family: Inter;
      background-color: #f5f5f5;
    }
    `}</style>
    <div tw="flex flex-col">
      <div tw="flex w-full h-16">
        {/* NavBar */}
      </div>
      <div tw="flex flex-col justify-center mt-16">
        <TextSm>
          Hello, I’m
        </TextSm>
        <TextXl>
          Konan
        </TextXl>
        <TextMd>
          Full-Stack Developer
        </TextMd>
      </div> 
    </div>
    <div tw="flex flex-col justify-center items-center w-full h-full"> 
      <div tw="flex items-center justify-center w-96 h-96 shadow-xl rounded-xl mb-28 text-blue-400">
          Class Developer
      </div>
    </div>
    </>
  )
}

export default Home
