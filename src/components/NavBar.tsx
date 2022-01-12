import styled from 'styled-components';
import Scroll from '../utils/Scroll';
import MaxWidthWrapper from './MaxWidthWrapper';

const NavBar = () => {
    
    return(
        <Wrapper>

        <MaxWidthWrapper>
            <Container>
                <Logo href="/">GMkonan</Logo>
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

const Logo = styled.a`
flex: auto;
color: var(--primary);
text-decoration: none;
font-size: 2rem;
font-weight: 700;
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

export default NavBar;