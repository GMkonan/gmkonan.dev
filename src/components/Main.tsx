import Image from 'next/image';
import styled, { keyframes } from 'styled-components';
import Me from '../../public/icon.svg';
import MaxWidthWrapper from './MaxWidthWrapper';
import Github from '../../public/socials/github.svg'
import Linkedin from '../../public/socials/linkedin.svg'
import Twitter from '../../public/socials/twitter.svg'
import { translateToLeft, translateToRight, scaleInExistence } from '../components/animations'

const Main = () => {

  return (
    <Container>
      <MaxWidthWrapper>
        <Wrapper>
          <TitleWrapper>
            <Title>Hi, I&apos;m Konan.</Title>
            <SubTitle>Creative Developer</SubTitle>
            <P>Self-Learning Developer manly focused in full-stack applications</P>
          </TitleWrapper>
          <ImageContainer>
            <Image src={Me} />
          </ImageContainer>
        </Wrapper>
        <SocialsWrapper>
            <SocialsList>
              <SocialsIcon>
                <Link target="_blank" href="https://github.com/gmkonan"><Image src={Github} /></Link>
              </SocialsIcon>
              <SocialsIcon>
              <Link target="_blank" href="https://www.linkedin.com/in/gmkonan/"><Image src={Linkedin} /></Link>
              </SocialsIcon>
              <SocialsIcon>
              <Link target="_blank" href="https://twitter.com/GuilhermeKonan"><Image src={Twitter} /></Link>
              </SocialsIcon>
            </SocialsList>
        </SocialsWrapper>
     {/*<ButtonContainer>
          <Button>Check My Work</Button>
        </ButtonContainer>*/}
      </MaxWidthWrapper>
    </Container>
  );
}

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
height: 100%;
`

const Wrapper = styled.div`
display: flex;
`

const TitleWrapper = styled.div`
display: flex;
flex-direction: column;
`

const Title = styled.h1`
font-size: 5rem;
font-weight: 600;
color: #094067;
animation: ${translateToRight} 0.75s ease 0s 1 normal both running;
`

const SubTitle = styled.h1`
font-size: 5rem;
font-weight: 600;
color: #094067;
animation: ${translateToRight} 0.75s ease 0s 1 normal both running;
`

const P = styled.h4`
margin-top: 20px;
font-size: 2rem;
color: #5f6c7b;
animation: ${translateToRight} 0.85s ease 0s 1 normal both running;
`

const ImageContainer = styled(Container)`
width: 200px;
height: 200px;
border-radius: 100%;
border: 3px #3da9fc solid;
animation: ${translateToLeft} 0.75s ease 0s 1 normal both running;
background: #d8eefe;
`

const SocialsWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-top: 150px;
animation: ${scaleInExistence} 0.65s ease 0s 1 normal both running;
`

const SocialsList = styled.ul`
display: flex;
justify-content: center;
align-items: center;
list-style: none;
color: white;
gap: 40px;
width: 100%;
margin-bottom: 75px;
&::before {
  content: "";
  height: 2px;
  width: 100%;
  background: #094067;
}

&::after {
  content: "";
  height: 2px;
  width: 100%;
  background: #094067;
}

`

const SocialsIcon = styled.li`
`

const Link = styled.a`
color: inherit;
text-decoration: inherit;
cursor: pointer;
`

export default Main;