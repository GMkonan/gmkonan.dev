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
    background: var(--primary);
`

const Copyright = styled.p`
    font-size: 0.9rem;
    color: var(--blue50);
`

export default Footer