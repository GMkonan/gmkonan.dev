import styled, { keyframes } from 'styled-components';

const Main = () => {

    return(
        <Container>
        <MaxWrapper>
            <Title>Hello, Im Konan</Title>        
            <Title>Creative Developer</Title>
            <Paragraph>Self-Learning Developer manly focused in full-stack applications</Paragraph>
            <ButtonContainer>
              <Button>Check My Work ↓</Button>
            </ButtonContainer>
        </MaxWrapper>
      </Container>
    );
}


const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
height: 100%;
`

const MaxWrapper = styled.div`
width: 1400px;
margin: 0 auto;
margin-bottom: 100px;
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

const Title = styled.h1`
font-size: 5rem;
font-weight: 600;
color: #fffffe;
animation: ${translateToRight} 0.75s ease 0s 1 normal both running;
`

const NameTitle = styled.h1`
font-size: 6rem;
font-weight: 600;
color: #fffffe;
`

const Paragraph = styled.h4`
font-size: 2rem;
color: #b8c1ec;
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

const ButtonContainer = styled(Container)`

`

export default Main;