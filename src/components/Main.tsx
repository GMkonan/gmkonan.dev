import Image from 'next/image';
import styled, { keyframes } from 'styled-components';
import Me from '../../public/icon.svg';
import MaxWidthWrapper from './MaxWidthWrapper';
import Github from '../../public/socials/github.svg'
import Linkedin from '../../public/socials/linkedin.svg'
import Twitter from '../../public/socials/twitter.svg'
const Main = () => {

  return (
    <Container>
      <MaxWidthWrapper>
        <Wrapper>
          <TitleWrapper>
            <Title>Hi, Im Konan.</Title>
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

const translateToRight = keyframes`
  from {
    transform: translateX(-300px);
    opacity: 0;
  }
  to {
    transform:  translateX(0);
    opacity: 1;
  }
`

const translateToLeft = keyframes`
  from {
    transform: translateX(300px);
    opacity: 0;
  }
  to {
    transform:  translateX(0);
    opacity: 1;
  }
`

const scaleInExistence = keyframes`
  from {
    transform: scale(0);
    //opacity: 0;
  }
  to {
    transform:  scale(1);
    //opacity: 1;
  }
`

const Intro = styled.p`
font-size: 1.2rem;
font-weight: 500;
color: #fffffe;
animation: ${translateToRight} 0.75s ease 0s 1 normal both running;
`

const Title = styled.h1`
font-size: 5rem;
font-weight: 600;
color: #fffffe;
animation: ${translateToRight} 0.75s ease 0s 1 normal both running;
`

const SubTitle = styled.h1`
font-size: 5rem;
font-weight: 600;
color: #fffffe;
animation: ${translateToRight} 0.75s ease 0s 1 normal both running;
`

const P = styled.h4`
margin-top: 20px;
font-size: 2rem;
color: #b8c1ec;
animation: ${translateToRight} 0.85s ease 0s 1 normal both running;
`

const ButtonContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
`

const Button = styled.button`
font-weight: 600;
font-size: 1.5rem;
outline: none;
border: none;
width: 300px;
height: 80px;
border-radius: 4px;
cursor: pointer;
//border: 2px solid white;
background: #eebbc3;
color: #232946;

&:hover {
  opacity: 0.95;
  transform: scale(0.99);
}
`

const ImageContainer = styled(Container)`
width: 200px;
height: 200px;
border-radius: 100%;
border: 3px #b8c1ec solid;
animation: ${translateToLeft} 0.75s ease 0s 1 normal both running;
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
  background: #b8c1ec;
}

&::after {
  content: "";
  height: 2px;
  width: 100%;
  background: #b8c1ec;
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