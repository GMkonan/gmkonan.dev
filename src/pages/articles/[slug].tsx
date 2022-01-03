import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import MaxWidthWrapper from '../../components/MaxWidthWrapper'
import fs from 'fs'
import matter from 'gray-matter';
import styled from 'styled-components';
import prism from "remark-prism";

export default function Slug({ source }: any) {

  const components = { 
    h2: (props:any) => <H2 variant="h2" {...props} />,
    p: (props:any) => <P variant="p" {...props} />,
    li: (props:any) => <LI variant="li" {...props} />
  }
  //consider making an "aside" at the left of the article
  return (
    <MaxWidthWrapper>
      <ArticleContainer>
        <MDXRemote {...source} components={components} />
      </ArticleContainer>
    </MaxWidthWrapper>
  )
}

const ArticleContainer = styled.div`
  //pass this width when aside is done
  //width: 800px;
  
  //margin: 56px 0;
  //background: #232946;
  border: 2px solid #2d3458;
  border-radius: 32px;
  padding: 20px;
  //font-size: 1.1rem;
  line-height: 26px;
  margin: 60px 0;
`

//elements from mdx
const H2 = styled.h2`
  margin: 20px 0;
  color: #d4d8f0;
`

const P = styled.p`
  color: white;
  font-size: 1.2rem;
`

const LI = styled.li`
  list-style-position: inside; //maintain numbers together, making padding affect list
  color: white;
`

export async function getStaticProps({params}: any) {
  const post = fs.readFileSync(`./posts/${params.slug}.mdx`)
  const article:any = matter(post) 
  const mdxSource = await serialize(article.content, {mdxOptions: {remarkPlugins: [prism]}})
  console.log(mdxSource)
  return { props: { source: mdxSource } }
}

export async function getStaticPaths() {
  
  const getArticles = () => fs.readdirSync('./posts')
    
    const articlesRaw = getArticles()
    
    const frontmatter = articlesRaw.map((articleRaw: any) => {
        const post = fs.readFileSync(`./posts/${articleRaw}`)
        const article:any = matter(post)  
        console.log(article)  
        return ({
            title: article.data.title,
            type: article.data.type,
            content: article.content,
            slug: article.data.slug,
        })
    })

  return {
    paths: frontmatter.map((post:any) => ({params: { slug: post.slug }})),
    fallback: false
  }
}