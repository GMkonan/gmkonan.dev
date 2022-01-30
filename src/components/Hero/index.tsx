import { useRef } from 'react';
import styled from 'styled-components';
import { QUERIES } from '@constants';
import MaxWidthWrapper from '@components/MaxWidthWrapper';

const Hero = () => {
    return(
        <Container id="Hero">
            <MaxWidthWrapper>
                <Title>About Me</Title> {/* Later change to "My Work" */}
                <SubTitle>Who Am I?</SubTitle>
                <AboutMe>
                    My name is Guilherme Monteiro Pereira AKA Konan and I&apos;m a Self-Learning Software Developer.
                    I have always had been really curious guy, researching ideas that interest me and that got me into programming.
                    I like making ideas come to reality with code.
                </AboutMe>
            </MaxWidthWrapper>
        </Container>
    );
}

const Container = styled.div`
display: flex;
flex-direction: column;
height: 100%;
background: var(--blue50); //#1a1e33
transition: color 350ms ease 0s, background-color 350ms ease 0s;
@media ${QUERIES.laptop} {
  
}
@media ${QUERIES.tablet} {
  
}
@media ${QUERIES.phone} {
  padding: 0 16px;
}
`

const Title = styled.h1`
margin-top: 225px;
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
font-size: 2rem;
color: var(--primary);
@media ${QUERIES.laptop} {
}
@media ${QUERIES.tablet} {
}
@media ${QUERIES.phone} {
  font-size: 1.4rem;
}
`

export default Hero;