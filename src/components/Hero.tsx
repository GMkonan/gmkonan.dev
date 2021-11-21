import styled from 'styled-components';
import MaxWidthWrapper from './MaxWidthWrapper';

const Hero = () => {
    return(
        <Container>
            <MaxWidthWrapper>
                <Title>My Work</Title>
                <div>things about me</div>
                <div>My photo (flip it to see both me and me in pixel art)</div>
                <div>List of what tech I use the most</div>
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

export default Hero;