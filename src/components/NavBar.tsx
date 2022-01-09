import styled from 'styled-components';
import Scroll from '../utils/Scroll';
import MaxWidthWrapper from './MaxWidthWrapper';

const NavBar = () => {
    
    return(
        <Wrapper>

        <MaxWidthWrapper>
            <Container>
                <Logo><UnstyledLink href="/">GMkonan</UnstyledLink></Logo>
                <Links>
                    <Link onClick={() => Scroll("Hero")}>About</Link> {/* Later change to "My Work" */}
                    {/*<Link>Projects</Link> */}
                    <Link href="/articles">Articles</Link>
                </Links>
            </Container>
        </MaxWidthWrapper>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    background: var(--blue50);
    height: 100px;
`

const Container = styled.div`
padding-top: 32px;
display: flex;
`

const Logo = styled.h1`
flex: auto;
color: var(--primary);
`

const Links = styled.div`
display: flex;
color: var(--primary);
gap: 20px;
`

const Link = styled.a`
font-size: 1.3rem;
font-weight: 500;
color: inherit;
text-decoration: inherit;
cursor: pointer;
`

const UnstyledLink = styled.a`
    text-decoration: none;
    color: var(--primary);
`

export default NavBar;