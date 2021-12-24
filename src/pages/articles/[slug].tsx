import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import MaxWidthWrapper from '../../components/MaxWidthWrapper'
import fs from 'fs'
import matter from 'gray-matter';
import styled from 'styled-components';
import prism from "remark-prism";

export default function TestPage({ source }: any) {

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
`

const H2 = styled.h2`
  margin: 20px 0;
  color: #232946;
`

export async function getStaticPaths() {
    return {
      paths: [],
      fallback: 'blocking'
    }
  }

export async function getStaticProps({params}: any) {
  const post = fs.readFileSync(`./posts/${params.slug}.mdx`)
  const article:any = matter(post) 
  const mdxSource = await serialize(article.content, {mdxOptions: {remarkPlugins: [prism]}})
  console.log(mdxSource)
  return { props: { source: mdxSource } }
}