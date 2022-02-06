import { useRef } from 'react';
import styled from 'styled-components';
import { QUERIES } from '@constants';
import MaxWidthWrapper from '@components/MaxWidthWrapper';
import Image from 'next/image';
import Me from "@public/mev2.png";

const Hero = () => {
    return(
        <Container id="Hero">
            <MaxWidthWrapper>
              <Wrapper>
                <Presentation>
                <Title>About Me</Title> {/* Later change to "My Work" */}
                <SubTitle>Who Am I?</SubTitle>
                <AboutMe>
                  {/* Write this section better */}
                    My name is Guilherme Monteiro Pereira AKA Konan and I&apos;m a Self-Learning Software Developer.
                    I have always had been really curious guy, researching ideas that interest me and that got me into programming.
                    I like making ideas come to reality with code :).
                    <br />
                    <br />
                    After nights and nights of study, today I work as a fullstack developer. 
                    <br />
                    You can check a few of the technologies I work with below:
                    <ul>
                      <li>Typescript</li>
                      <li>React</li>
                      <li>NextJS</li>
                      <li>GraphQL</li>
                    </ul>
                </AboutMe>
                </Presentation>

                <ImageContainer>
                  <Image src={Me} />
                </ImageContainer>

              </Wrapper>
            </MaxWidthWrapper>
        </Container>
    );
}

const Container = styled.div`
display: flex;
//flex-direction: column;
height: 100%;
background: var(--white); //#1a1e33
transition: color 350ms ease 0s, background-color 350ms ease 0s;
@media ${QUERIES.laptop} {
  
}
@media ${QUERIES.tablet} {
  padding: 0px 16px;
}
`

const Wrapper = styled.div`
  margin-top: 100px;
  display: grid;
  grid-template-columns: 60% 40%;
  grid-template-rows: 1fr;
  gap: 32px;
  //flex-direction: column;
`

const Presentation = styled.div`
  display: flex;
  flex-direction: column;
`

const Title = styled.h1`
font-size: 5rem;
color: var(--primary);

@media ${QUERIES.laptop} {
  font-size: 4rem;
}
@media ${QUERIES.tablet} {
  font-size: 3rem;
  
}
@media ${QUERIES.phone} {
  font-size: 2.3rem;
  margin-top: 155px;
}
`

const SubTitle = styled.h1`
margin-top: 50px;
font-size: 2.78rem;
color: var(--primary);

@media ${QUERIES.laptop} {
    
}
@media ${QUERIES.tablet} {
  font-size: 2.3rem;
}
@media ${QUERIES.phone} {
  font-size: 2rem;
}
`

const AboutMe = styled.h2`
padding: 0 0px;
margin-top: 75px;
font-size: 1.3rem;
line-height: 28px;
color: var(--gray);
@media ${QUERIES.laptop} {
}
@media ${QUERIES.tablet} {
}
@media ${QUERIES.phone} {
  font-size: 1.4rem;
}
`

const ImageContainer = styled(Container)`
  width: 350px;
  height: 350px;
  margin-left: 56px;
  //border-radius: 100%;
  //border: 3px var(--blue400) solid;
  //animation: ${translateToLeft} 0.75s ease 0s 1 normal both running;
  background: var(--blue50);

  @media ${QUERIES.laptop} {
  }
  @media ${QUERIES.tablet} {
  }
  @media ${QUERIES.phone} {
    display: none;
  }
`;

export default Hero;