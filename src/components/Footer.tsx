import styled from "styled-components"


const Footer = () => {
    return(
        <Container>
            <Title>Made using Typescript</Title>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 120px;
    background: #d4d8f0;
`

const Title = styled.div`
    font-size: 1.25rem;
    font-weight: 600;
    color: #232946;
`

export default Footer