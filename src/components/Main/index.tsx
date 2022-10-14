import Image from 'next/image'
import styled from 'styled-components'
import Me from '@public/icon.svg'
import MaxWidthWrapper from '@components/MaxWidthWrapper'
import {
    translateToLeft,
    translateToRight,
    scaleInExistence,
} from '@components/animations'
import { QUERIES } from '@constants'
import { Github, Linkedin, Twitter } from '@components/svgs'

const Main = () => {
    return (
        <Container>
            <MaxWidthWrapper>
                <Wrapper>
                    <TitleWrapper>
                        <Title>Hi, I&apos;m Konan.</Title>
                        <SubTitle>Creative Developer</SubTitle>
                        <P>
                            Self-Learning Developer manly focused in full-stack
                            applications
                        </P>
                    </TitleWrapper>
                    <ImageContainer>
                        <Image src={Me} />
                    </ImageContainer>
                </Wrapper>
                <SocialsWrapper>
                    <SocialsList>
                        <SocialsIcon>
                            <Link
                                target="_blank"
                                href="https://github.com/gmkonan"
                            >
                                <Github
                                    fill="var(--primary)"
                                    width="32px"
                                    height="32px"
                                />
                            </Link>
                        </SocialsIcon>
                        <SocialsIcon>
                            <Link
                                target="_blank"
                                href="https://www.linkedin.com/in/gmkonan/"
                            >
                                <Linkedin
                                    fill="var(--primary)"
                                    width="32px"
                                    height="32px"
                                />
                            </Link>
                        </SocialsIcon>
                        <SocialsIcon>
                            <Link
                                target="_blank"
                                href="https://twitter.com/GuilhermeKonan"
                            >
                                <Twitter
                                    fill="var(--primary)"
                                    width="32px"
                                    height="32px"
                                />
                            </Link>
                        </SocialsIcon>
                    </SocialsList>
                </SocialsWrapper>
                <ButtonWrapper>
                    <Button
                        href="/GuilhermeKonanResume.pdf"
                        download="GuilhermeKonanResume.pdf"
                    >
                        Download My Resume
                    </Button>
                </ButtonWrapper>
            </MaxWidthWrapper>
        </Container>
    )
}

const Container = styled.div`
    z-index: 0;
    width: 100%;
    background: var(--white);
    transition: color 350ms ease 0s, background-color 350ms ease 0s;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;

    @media ${QUERIES.laptop} {
    }
    @media ${QUERIES.tablet} {
    }
    @media ${QUERIES.phone} {
        padding: 0 16px;
    }
`

const Wrapper = styled.div`
    display: flex;
`

const TitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

const Title = styled.h1`
    font-size: 5rem;
    font-weight: 600;
    color: var(--primary);
    animation: ${translateToRight} 0.75s ease 0s 1 normal both running;

    @media ${QUERIES.laptop} {
        font-size: 4rem;
    }
    @media ${QUERIES.tablet} {
        font-size: 3rem;
    }
    @media ${QUERIES.phone} {
        font-size: 2.4rem;
    }
`

const SubTitle = styled.h1`
    font-size: 5rem;
    font-weight: 600;
    color: var(--primary);
    animation: ${translateToRight} 0.75s ease 0s 1 normal both running;

    @media ${QUERIES.laptop} {
        font-size: 4rem;
    }
    @media ${QUERIES.tablet} {
        font-size: 3rem;
    }
    @media ${QUERIES.phone} {
        font-size: 2.4rem;
    }
`

const P = styled.h4`
    margin-top: 20px;
    font-size: 2rem;
    color: var(--gray);
    animation: ${translateToRight} 0.85s ease 0s 1 normal both running;

    @media ${QUERIES.laptop} {
        font-size: 2rem;
    }
    @media ${QUERIES.tablet} {
        font-size: 1.2rem;
    }
    @media ${QUERIES.phone} {
        font-size: 1.1rem;
    }
`

const ImageContainer = styled(Container)`
    width: 200px;
    height: 200px;
    border-radius: 100%;
    border: 3px var(--blue400) solid;
    animation: ${translateToLeft} 0.75s ease 0s 1 normal both running;
    background: var(--blue50);

    @media ${QUERIES.laptop} {
    }
    @media ${QUERIES.tablet} {
    }
    @media ${QUERIES.phone} {
        display: none;
    }
`

const SocialsWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 150px;
    animation: ${scaleInExistence} 0.65s ease 0s 1 normal both running;
    @media ${QUERIES.laptop} {
        margin-top: 75px;
    }
    @media ${QUERIES.tablet} {
    }
    @media ${QUERIES.phone} {
        margin-top: 75px;
    }
`

const SocialsList = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    color: var(--white);
    gap: 40px;
    width: 100%;
    margin-bottom: 75px;
    &::before {
        content: '';
        height: 2px;
        width: 100%;
        background: var(--primary);
    }

    &::after {
        content: '';
        height: 2px;
        width: 100%;
        background: var(--primary);
    }

    @media ${QUERIES.laptop} {
    }
    @media ${QUERIES.tablet} {
    }
    @media ${QUERIES.phone} {
        gap: 32px; //56px
    }
`

const SocialsIcon = styled.li``

const Link = styled.a`
    color: inherit;
    text-decoration: inherit;
    cursor: pointer;
`

const ButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const Button = styled.a`
    border-radius: 8px;
    background-color: var(--blue50);
    color: var(--primary);
    font-weight: 500;
    padding: 16px;
    text-decoration: none;
    &:hover {
        transform: scale(1.03);
    }

    @media ${QUERIES.laptop} {
    }
`

export default Main
