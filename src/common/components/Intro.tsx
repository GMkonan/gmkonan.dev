import Image from 'next/image';
import { TextSm, TextMd, TextXl } from '@components/Texts';
import GithubLogo from '@images/github-logo.svg';
import LinkedinLogo from '@images/linkedin-logo.svg';
import TwitterLogo from '@images/twitter-logo.svg';
import tw, { css } from 'twin.macro';
import MeRoot from './MeRoot';

const Intro = () => {
    return(
      <div tw="flex flex-row">
      <div tw="flex flex-col mt-16">
        <TextSm>
          Hello, I’m
        </TextSm>
        <TextXl tw="ml-4">
          Konan
        </TextXl>
        <TextMd tw="ml-8">
          Full-Stack Developer
        </TextMd>
      </div>
      </div>
    )
}

export default Intro;