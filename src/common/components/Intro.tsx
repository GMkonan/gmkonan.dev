import Image from 'next/image';
import { TextSm, TextMd, TextXl } from '@components/Texts';
import GithubLogo from '@images/github-logo.svg';
import LinkedinLogo from '@images/linkedin-logo.svg';
import TwitterLogo from '@images/twitter-logo.svg';
import tw, { css } from 'twin.macro';

const Intro = () => {
    return(
      <div tw="flex flex-col justify-center w-1/2 mt-16">
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
    )
}

export default Intro;