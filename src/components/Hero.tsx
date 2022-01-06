import { useRef } from 'react';
import styled from 'styled-components';
import MaxWidthWrapper from './MaxWidthWrapper';

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
background: #d8eefe; //#1a1e33
`

const Title = styled.h1`
margin-top: 225px;
font-size: 5rem;
color: #094067;
`

const SubTitle = styled.h1`
margin-top: 50px;
font-size: 2.78rem;
color: #094067;
`

const AboutMe = styled.h2`
padding: 0 0px;
margin-top: 75px;
font-size: 2rem;
color: #094067;
`

export default Hero;