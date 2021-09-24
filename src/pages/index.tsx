import type { NextPage } from 'next'
import Image from 'next/image';
import tw, { css } from 'twin.macro';
import { TextSm, TextMd, TextXl } from '@components/Texts';
import NavBar from '@components/NavBar';
import GithubLogo from '@images/github-logo.svg';
import LinkedinLogo from '@images/linkedin-logo.svg';
import TwitterLogo from '@images/twitter-logo.svg';
import Wave from '@images/wave.svg';
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
      <div tw="flex w-96 h-96 bg-main-color shadow-xl rounded-xl mb-48 text-brand-color z-10">
        <div tw="mt-4 ml-4">
          Class Developer
        </div>
      </div>
    </div>
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
  </Layout>
  )
}

export default Home
