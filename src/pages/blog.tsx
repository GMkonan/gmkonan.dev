import styled from "styled-components";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import fs from 'fs'
import matter from 'gray-matter';

interface Metadata {
    title: string
    type: string
    slug: string
    description: string
    content: string
}

const Blog = (props:any) => {
    return(
        <Container>
            <MaxWidthWrapper>
                
                <Wrapper>
                    {props.frontmatter.map((metadata:Metadata) => (
                        
                        <Article key={metadata.slug} href={`/articles/${metadata.slug}`}>
                            <Title>{metadata.title}</Title>
                            <Description>
                                {metadata.description}
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
`

const Article = styled.a`
color: #FFFFFF;
text-decoration: none;
width: 500px;
height: 300px;
background: white;
border-radius: 3%;
padding: 16px;
`

const Title = styled.h1`
font-size: 2rem;
margin-bottom: 12px;
color: #232946;
`

const Description = styled.p`
color: #232946;
font-size: 1.1rem;
line-height: 28px;
font-weight: 500;
`

const PostType = styled.div`
    //display: inline;
    //width: min-content;
    //border-bottom: 2px solid white;
    font-size: 2rem;
    font-weight: 500;
    color: white;
    margin-left: 20px;
    padding: 20px 0;
`

export async function getStaticProps() {
  
    const getArticles = () => fs.readdirSync('./posts')
    
    const articlesRaw = getArticles()
    
    const frontmatter = articlesRaw.map((articleRaw: any) => {
        const post = fs.readFileSync(`./posts/${articleRaw}`)
        const article:any = matter(post)  
        console.log(article)  
        return ({
            title: article.data.title,
            type: article.data.type,
            slug: article.data.slug,
            description: article.data.description,
            content: article.content,
        })
    })

    return { props: { frontmatter } }
  }

export default Blog;