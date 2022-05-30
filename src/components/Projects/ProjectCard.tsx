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
            <Card>
                <Title>{title}</Title>
                <Description>{description}</Description>
                <TechWrapper>
                    {techs.map((tech) => (
                        <Tech>{tech}</Tech>
                    ))}
                </TechWrapper>
            </Card>
            <ImageLink>
                <Image src={image} width={650} height={400} />
            </ImageLink>
        </Project>
    )
}

const Project = styled.div`
    display: flex;
    width: 100%;
    height: 400px;
`

const Card = styled.div`
    margin-top: 32px;
    width: 400px;
`

const Image = styled.img`
    /* mix-blend-mode: multiply;
    filter: grayscale(100%) contrast(1) brightness(90%);
    z-index: 2;

    &:hover {
        filter: none;
        //mix-blend-mode: none;
    } */
`

const ImageLink = styled.a`
    cursor: pointer;
    /* background-color: var(--blue50-blurred);
    &:hover {
        background-color: none;
        //mix-blend-mode: none;
    } */
`

const Title = styled.div`
    font-size: 1.4rem;
    font-weight: 700;
    color: var(--primary);
    margin-bottom: 56px;
`

const Description = styled.div`
    position: absolute;
    margin-top: 32px;
    font-size: 1rem;
    color: var(--blue400);
    background-color: var(--off-white);
    width: 450px;
    height: 100px;
    padding: 16px;
`

const TechWrapper = styled.div``

const Tech = styled.div``

export default ProjectCard
