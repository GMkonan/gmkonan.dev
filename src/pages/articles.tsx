import styled from "styled-components";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import { getPostsData, getRecentPostsData } from "../api";
import { format } from "date-fns";
import { QUERIES } from "../constants";

interface Metadata {
    title: string
    type: string
    slug: string
    description: string
    publishedOn: Date
    content: string
}

const Blog = (props:any) => {
    return(
        <Container>
            <MaxWidthWrapper>
                <Wrapper>
                    {props.frontmatter.map((metadata: Metadata) => (
                        <Article key={metadata.slug} href={`/articles/${metadata.slug}`}>
                            <Title>{metadata.title}</Title>
                            <Description>
                                {metadata.description}
                                <h5>{format(new Date(metadata.publishedOn), 'MM/dd/yyyy')}</h5>
                            </Description>
                        </Article>
                    ))}
                </Wrapper>
            </MaxWidthWrapper>
        </Container>
    );
}
const Container = styled.div`
margin-top: 32px;
`

const Wrapper = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: repeat(2, 1fr);
justify-items: center;
gap: 32px;
padding: 64px 0;

@media ${QUERIES.laptop} {
  
}
@media ${QUERIES.tablet} {
  
}
@media ${QUERIES.phone} {
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
}

`

const Article = styled.a`
color: var(--white);
text-decoration: none;
width: 500px;
height: 300px;
background: var(--white);
border-radius: 3%;
padding: 16px;
border: 2px solid var(--primary);

@media ${QUERIES.laptop} {
  
}
@media ${QUERIES.tablet} {
  
}
@media ${QUERIES.phone} {
  width: 350px;
  height: auto;
}
`

const Title = styled.h1`
font-size: 2rem;
margin-bottom: 12px;
color:var(--primary);

@media ${QUERIES.laptop} {
  
}
@media ${QUERIES.tablet} {
  
}
@media ${QUERIES.phone} {
  font-size: 1.3rem;
}
`

const Description = styled.p`
color: var(--gray);
font-size: 1.1rem;
line-height: 28px;
font-weight: 500;

@media ${QUERIES.laptop} {
  
}
@media ${QUERIES.tablet} {
  
}
@media ${QUERIES.phone} {
    font-size: 1rem;
}
`

const PostType = styled.div`
    //display: inline;
    //width: min-content;
    //border-bottom: 2px solid white;
    font-size: 2rem;
    font-weight: 500;
    color: var(--white);
    margin-left: 20px;
    padding: 20px 0;
`

export async function getStaticProps() {
    const frontmatter:Metadata[] = getRecentPostsData()
    return { props: { frontmatter } }
}

export default Blog;