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
            <Card>
                <Title>{title}</Title>
                <Description>{description}</Description>
                <TechWrapper>
                    {techs.map((tech) => (
                        <Tech key={tech}>{tech}</Tech>
                    ))}
                </TechWrapper>
                <LinkWrapper>
                    <Link href={links.github}>
                        <Github
                            fill="var(--blue400)"
                            width="24px"
                            height="24px"
                        />
                    </Link>
                    {links.preview !== '' ? (
                        <Link href={links.preview}>
                            <ExternalLink
                                fill="var(--blue400)"
                                width="24px"
                                height="24px"
                            />
                        </Link>
                    ) : null}
                </LinkWrapper>
            </Card>
            <ImageLink href={links.preview}>
                <ImageWrapper>
                    <Image src={image} width={650} height={400} />
                </ImageWrapper>
            </ImageLink>
        </Project>
    )
}

const Project = styled.div`
    display: flex;
    width: 100%;
    height: 400px;
    margin-bottom: 82px;
`

const Card = styled.div`
    /* display: flex;
    flex-direction: column; */
    margin-top: 32px;
    width: 400px;
`

const Image = styled.img`
    border: 2px solid var(--blue400);
    border-radius: 8px;
    position: static;
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
    background-color: #00907685;
    &::before {
        content: '';
        mix-blend-mode: screen;
        background-color: var(--blue400);
        width: 100%;
        height: 100%;
        z-index: 3;
        inset: 0px;
        position: absolute;
    }
    /* background-color: var(--blue50-blurred);
    &:hover {
        background-color: none;
        //mix-blend-mode: none;
    } */
`

const ImageWrapper = styled.div`
    //border-radius: var(--border-radius);
    mix-blend-mode: multiply;
    filter: grayscale(100%) contrast(1) brightness(90%);
`

const Title = styled.div`
    font-size: 1.4rem;
    font-weight: 700;
    color: var(--primary);
    margin-bottom: 56px;
`

const Description = styled.div`
    position: absolute;
    margin-top: 8px;
    font-size: 1rem;
    color: var(--blue400);
    background-color: var(--off-white);
    width: 450px;
    height: 100px;
    padding: 16px;
    border-radius: 8px;
`

const TechWrapper = styled.div`
    position: relative;
    top: 124px;
    display: flex;
    gap: 16px;
`

const Tech = styled.div`
    background: var(--blue400);
    color: var(--off-white);
    font-size: 16px;
    font-weight: 600;
    padding: 3px;
    border-radius: 4px;
`

const LinkWrapper = styled.div`
    position: relative;
    bottom: -224px;
    display: flex;
    align-items: flex-end;
`

const Link = styled.a`
    margin-right: 8px;
`

export default ProjectCard
