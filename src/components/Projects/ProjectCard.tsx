import { ExternalLink, Github } from '@components/svgs'
import styled from 'styled-components'

interface ProjectCardProps {
    title: string
    description: string
    techs: string[]
    links: {
        github: string
        preview: string
    }
    image: string
}

const ProjectCard = ({
    title,
    description,
    techs,
    links,
    image,
}: ProjectCardProps) => {
    return (
        <Project>
            <Info>
                <Title>{title}</Title>
                <Description>{description}</Description>
                <TechsWrapper>
                    <TechsTitle>Technologies</TechsTitle>
                    <Techs>
                        {techs.map((tech) => (
                            <Tech key={tech}>{tech}</Tech>
                        ))}
                    </Techs>
                </TechsWrapper>
                <Links>
                    <a target="blank" href={links.github}>
                        <Github
                            fill="var(--white)"
                            width="28px"
                            height="28px"
                        />
                    </a>
                    <a target="blank" href={links.preview}>
                        <ExternalLink
                            fill="var(--white)"
                            width="28px"
                            height="28px"
                        />
                    </a>
                </Links>
            </Info>
            <ImageWrapper>
                <Image src={image} />
            </ImageWrapper>
        </Project>
    )
}

const Project = styled.div`
    display: flex;
    width: 100%;
    height: 400px;
    background: var(--primary);
    margin: 32px 0;
    border-radius: 16px;
    overflow: hidden;
`

const Info = styled.div`
    padding: 16px;
    width: 40%;
`

const Title = styled.h1`
    font-size: 1.2rem;
    color: var(--white);
`

const Description = styled.p`
    margin-top: 24px;
    color: var(--gray400);
`

const ImageWrapper = styled.div`
    width: 60%;
    height: 100%;
`

const Image = styled.img`
    height: 100%;
    width: 100%;
`

const TechsWrapper = styled.div`
    margin-top: 108px;
`

const Techs = styled.div`
    display: flex;
    gap: 12px;
`

const Tech = styled.div`
    color: var(--white);
    padding: 8px;
    border-radius: 4px;
    font-weight: bold;
    background: var(--blue400);
    font-size: 0.8rem;
`

const TechsTitle = styled.h2`
    font-size: 1rem;
    margin-bottom: 12px;
    color: var(--white);
`

const Links = styled.div`
    display: flex;
    gap: 16px;
    margin-top: 32px;
`

export default ProjectCard
