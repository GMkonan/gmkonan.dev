import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import MaxWidthWrapper from '../../components/MaxWidthWrapper'
import fs from 'fs'
import matter from 'gray-matter';
import styled from 'styled-components';
import prism from "remark-prism";

export default function Slug({ source }: any) {

  const components = { h2: (props:any) => <H2 variant="h2" {...props} /> }

  return (
    <MaxWidthWrapper>
      <ArticleContainer>
        <MDXRemote {...source} components={components} />
      </ArticleContainer>
    </MaxWidthWrapper>
  )
}

const ArticleContainer = styled.div`
  //margin: 56px 0;
  background: #fff;
  border-radius: 32px;
  padding: 20px;
  //font-size: 1.1rem;
  line-height: 26px;
  margin: 60px 0;
`

const H2 = styled.h2`
  margin: 20px 0;
  color: #232946;
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

// Slug.getInitialProps = async (context: any) => {
//   console.log(context)
//   const post = fs.readFileSync(`./posts/${context.query.slug}.mdx`)
//   const article:any = matter(post) 
//   const mdxSource = await serialize(article.content, {mdxOptions: {remarkPlugins: [prism]}})
//   console.log(mdxSource)
//   return { props: { source: mdxSource } }
// }