import { useRef } from 'react'
import styled from 'styled-components'
import { QUERIES } from '@constants'
import MaxWidthWrapper from '@components/MaxWidthWrapper'
import Image from 'next/image'
import Me from '@public/mev2.png'

/* Change HTML structure */
const Hero = () => {
    return (
        <Container id="Hero">
            <MaxWidthWrapper>
                <Wrapper>
                    <Presentation>
                        <Title>About Me</Title>{' '}
                        {/* Later change to "My Work" */}
                        <SubTitle>Who Am I?</SubTitle>
                        <AboutMe>
                            {/* Write this section better */}
                            My name is{' '}
                            <Strong>Guilherme Monteiro Pereira</Strong> AKA
                            Konan and I&apos;m a{' '}
                            <Strong>Self-Learning Software Developer</Strong>. I
                            have always had been really curious guy, researching
                            ideas that interest me and that got me into
                            programming. I like making ideas come to reality
                            with code :).
                            <br />
                            <br />
                            After nights and nights of study, today I work as a{' '}
                            <Strong> fullstack developer </Strong>.
                            <br />
                            You can check a few of the technologies I work with
                            below:
                        </AboutMe>
                    </Presentation>

                    <ImageContainer>
                        <Image src={Me} />
                    </ImageContainer>
                    <SkillsContainer>
                        <TitleSkills>Skills</TitleSkills>
                        <Skills>
                            <Card>Javascript ES6</Card>
                            <Card>Typescript</Card>
                            <Card>React</Card>
                            <Card>NextJS</Card>
                            <Card>TailwindCSS</Card>
                            <Card>GraphQL</Card>
                            <Card>Hasura</Card>
                            <Card>PostgresSQL</Card>
                            <Card>NodeJS</Card>
                        </Skills>
                    </SkillsContainer>
                </Wrapper>
            </MaxWidthWrapper>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    //flex-direction: column;
    height: 100%;
    background: var(--white); //#1a1e33
    transition: color 350ms ease 0s, background-color 350ms ease 0s;
    @media ${QUERIES.laptop} {
    }
    @media ${QUERIES.tablet} {
        padding: 0px 16px;
        height: auto;
        margin-bottom: 24px;
    }
`

const Wrapper = styled.div`
    margin-top: 100px;
    display: grid;
    grid-template-columns: 60% 40%;
    grid-template-rows: 60% 40%;
    gap: 32px;
    //flex-direction: column;
    @media ${QUERIES.tablet} {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-top: 25px;
    }
`

const Presentation = styled.div`
    display: flex;
    flex-direction: column;
`

const Title = styled.h1`
    font-size: 5rem;
    color: var(--primary);

    @media ${QUERIES.laptop} {
        font-size: 4rem;
    }
    @media ${QUERIES.tablet} {
        font-size: 3rem;
    }
    @media ${QUERIES.phone} {
        font-size: 2.6rem;
    }
`

const SubTitle = styled.h1`
    margin-top: 50px;
    font-size: 2.78rem;
    color: var(--primary);

    @media ${QUERIES.laptop} {
    }
    @media ${QUERIES.tablet} {
        font-size: 2.3rem;
    }
    @media ${QUERIES.phone} {
        font-size: 2rem;
    }
`

const AboutMe = styled.div`
    padding: 0 0px;
    margin-top: 75px;
    font-size: 1.3rem;
    line-height: 28px;
    color: var(--gray);
    @media ${QUERIES.laptop} {
    }
    @media ${QUERIES.tablet} {
    }
    @media ${QUERIES.phone} {
        font-size: 1.1rem;
        line-height: 20px;
    }
`

const SkillsContainer = styled.div`
`

const Strong = styled.strong`
    color: var(--blue400);
`

const ImageContainer = styled(Container)`
    margin-top: 52px;
    width: 350px;
    height: 350px;
    margin-left: 56px;
    background: var(--blue50);

    @media ${QUERIES.laptop} {
    }
    @media ${QUERIES.tablet} {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 300px;
        height: 300px;
        margin: 0;
    }
    @media ${QUERIES.phone} {
        width: 200px;
        height: 200px;
    }
`

const Skills = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 16px;
    align-items: center;
    justify-items: center;

    @media ${QUERIES.phone} {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: auto;
        gap: 10px;
    }
`

const TitleSkills = styled.h1`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 32px 0;
    color: var(--blue400);
    font-size: 2rem;
    gap: 32px;
    //border-bottom: 2px solid var(--blue400);
    &:after {
        content: '';
        height: 2px;
        width: 100%;
        background: var(--blue400);
    }
    &:before {
        content: '';
        height: 2px;
        width: 100%;
        background: var(--blue400);
    }
`

const Card = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 50px;
    border-radius: 10px;
    color: var(--blue400);
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    font-weight: 500;
    @media ${QUERIES.phone} {
        width: 170px;
    }
`

export default Hero
