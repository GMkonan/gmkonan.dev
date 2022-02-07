import styled from 'styled-components';
import { QUERIES } from '@constants';
import Scroll from '@utils/Scroll';
import Hamburguer from '@components/Hamburguer';
import MaxWidthWrapper from '@components/MaxWidthWrapper';
import router from 'next/router'
import ThemeToggle from '@components/ThemeToggle';

const NavBar = () => {
    
    const handleOptionClick = () => window.location.pathname == "/" ? Scroll("Hero") : router.push('/')   

    return(
        <Wrapper>

        <MaxWidthWrapper>
            <Container>
                <Logo><Title href="/">GMkonan</Title></Logo>
                <Hamburguer />
                <Links>
                <ThemeToggle />
                    <Link onClick={handleOptionClick}>About</Link> {/* Later change to "My Work" */}
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
    transition: color 350ms ease 0s, background-color 350ms ease 0s;
    height: 100px;
`

const Container = styled.div`
padding-top: 32px;
display: flex;
`

const Logo = styled.div`
flex: auto;
font-size: 2rem;
font-weight: 700;

@media ${QUERIES.laptop} {
  
}
@media ${QUERIES.tablet} {
    padding: 0px 12px;
}
@media ${QUERIES.phone} {
  font-size: 1.7rem;
  padding: 0px 12px;
}
`

const Title = styled.a`
    color: var(--primary);
text-decoration: none;
`

const Links = styled.div`
display: flex;
color: var(--primary);
gap: 20px;

@media ${QUERIES.laptop} {
  
}
@media ${QUERIES.tablet} {
    padding: 0px 12px;
}
@media ${QUERIES.phone} {
  display: none;
}
`

const Link = styled.a`
font-size: 1.3rem;
font-weight: 500;
color: inherit;
text-decoration: inherit;
cursor: pointer;
`

export default NavBar;