import { useRef } from 'react';
import styled from 'styled-components';
import useScroll from '../hooks/useScroll';
import MaxWidthWrapper from './MaxWidthWrapper';

const Hero = () => {
    return(
        <Container id="Hero">
            <MaxWidthWrapper>
                <Title>My Work</Title>
                <AboutMe>
                    My name is Guilherme Monteiro Pereira AKA Konan and I'm a Self-Learning Software Developer.
                    I have always had been really curious guy, researching ideas that interest me and that got me into programming.
                    I like making ideas come to reality with code.
                </AboutMe>
                <div>List of interests</div>
                <div>Maybe a github custom graph of contributions?</div>
            </MaxWidthWrapper>
        </Container>
    );
}

const Container = styled.div`
display: flex;
flex-direction: column;
height: 100%;
background: #d4d8f0;
`

const Title = styled.h1`
margin-top: 100px;
font-size: 3rem;
color: #232946;
`

const AboutMe = styled.h2`
padding: 0 0px;
margin-top: 50px;
font-size: 1.25rem;
color: #232946;
`

const Interests = styled.div`

`

export default Hero;