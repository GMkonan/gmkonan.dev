import type { NextPage } from 'next'
import Image from 'next/image';
import tw, { css } from 'twin.macro';
import { TextSm, TextMd, TextXl } from '@components/Texts';
import NavBar from '@components/NavBar';
import GithubLogo from '@images/github-logo.svg';
import LinkedinLogo from '@images/linkedin-logo.svg';
import TwitterLogo from '@images/twitter-logo.svg';
import Layout from 'src/common/layouts/layout';

const Home: NextPage = () => {
  return (
  <Layout>   
    <div tw="flex flex-col">
      <div tw="flex w-full h-16 m-4">
        <NavBar />
      </div>
      <div tw="flex flex-col justify-center mt-16 w-1/2">
        <TextSm>
          Hello, I’m
        </TextSm>
        <TextXl>
          Konan
        </TextXl>
        <TextMd>
          Full-Stack Developer
        </TextMd>
        <div tw="flex items-center justify-evenly ml-32 mt-4 w-1/3">
          <a target="_blank" rel='noreferrer' href="https://github.com/gmkonan">
            <Image src={GithubLogo} alt="My Github" />
          </a>
          <a target="_blank" rel='noreferrer' href="https://www.linkedin.com/in/gmkonan">
            <Image src={LinkedinLogo} alt="My Linkedin" />
          </a>
          <a target="_blank" rel='noreferrer' href="https://twitter.com/GuilhermeKonan">
            <Image src={TwitterLogo} alt="My Twitter" />
          </a>
        </div>
      </div> 
    </div>
    <div tw="flex flex-col justify-center items-center w-full h-full"> 
      <div tw="flex w-96 h-96 shadow-xl rounded-xl mb-48 text-brand-color">
        <div tw="mt-4 ml-4">
          Class Developer
        </div>
      </div>
    </div>
  </Layout>
  )
}

export default Home
