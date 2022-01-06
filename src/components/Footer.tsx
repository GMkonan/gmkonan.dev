import styled from "styled-components"


const Footer = () => {
    return(
        <Container>
            <Copyright>© {new Date().getFullYear()}-present GMkonan. All Rights Reserved.</Copyright>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 120px;
    background: #094067;
`

const Copyright = styled.p`
    font-size: 0.9rem;
    color: #d8eefe;
`

export default Footer