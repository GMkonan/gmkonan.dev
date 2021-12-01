import styled from 'styled-components';
import useScroll from '../hooks/useScroll';
import MaxWidthWrapper from './MaxWidthWrapper';

const NavBar = () => {
    
    return(
        <MaxWidthWrapper>
            <Container>
                <Logo>GMkonan</Logo>
                <Links>
                    <Link onClick={() => useScroll("Hero")}>My Work</Link>
                    <Link>Projects</Link>
                    <Link href="/blog">Articles</Link>
                </Links>
            </Container>
        </MaxWidthWrapper>
    );
}

const Container = styled.div`
padding-top: 32px;
display: flex;
`

const Logo = styled.h1`
flex: auto;
color: white;
`

const Links = styled.div`
display: flex;
color: white;
gap: 20px;
`

const Link = styled.a`
font-size: 1.3rem;
font-weight: 500;
color: inherit;
text-decoration: inherit;
cursor: pointer;
`

export default NavBar;