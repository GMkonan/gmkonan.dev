import styled from 'styled-components'
import MaxWidthWrapper from '@components/MaxWidthWrapper'
import { QUERIES } from '@constants'
import projectsData from './projectsData.json'
import ProjectCard from './ProjectCard'

/* 
the idea is passing the projects to here from elsewhere,
(I still don't know where, maybe from github API)
but since this is the idea I will be passing the projects details
in a json file to be consumed by this page, that way it will be
easier to change to any sort of API,db or something
*/

const Projects = () => {
    return (
        <Container id="projects">
            <MaxWidthWrapper>
                <Wrapper>
                    <Title>Projects</Title>
                    {projectsData.projects.map((project) => (
                        <ProjectCard
							key={project.title}
                            title={project.title}
                            description={project.description}
                            techs={project.techs}
                            links={project.links}
                            image={project.image}
                        />
                    ))}
                </Wrapper>
            </MaxWidthWrapper>
        </Container>
    )
}

const Container = styled.div`
    z-index: 0;
    background: var(--white);
    transition: color 350ms ease 0s, background-color 350ms ease 0s;
`
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
    margin: 100px 0;
`
const Title = styled.h1`
    font-size: 5rem;
    margin-bottom: 100px;
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

export default Projects
