import styled from 'styled-components';

const Hero = () => {
    return(
        <Container>
            <MaxWrapper>
                <Title>My Work</Title>
                <div>things about me</div>
                <div>My photo (flip it to see both me and me in pixel art)</div>
                <div>List of what tech I use the most</div>
                <div>List of interests</div>
            </MaxWrapper>
        </Container>
    );
}

const Container = styled.div`
display: flex;
flex-direction: column;
height: 100%;
background: #d4d8f0;
`

const MaxWrapper = styled.div`
width: 1400px;
margin: 0 auto;
`

const Title = styled.h1`
margin-top: 100px;
font-size: 3rem;
color: #232946;
`

export default Hero;