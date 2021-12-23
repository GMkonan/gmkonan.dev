import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import MaxWidthWrapper from '../../components/MaxWidthWrapper'
import fs from 'fs'
import matter from 'gray-matter';

export default function TestPage({ source }: any) {

  return (
    <MaxWidthWrapper>
      <MDXRemote {...source} />
    </MaxWidthWrapper>
  )
}



export async function getStaticPaths() {
    return {
      paths: [],
      fallback: 'blocking'
    }
  }

export async function getStaticProps({params}: any) {
  const post = fs.readFileSync(`./posts/${params.slug}.mdx`)
  const article:any = matter(post) 

  const mdxSource = await serialize(article.content)
  return { props: { source: mdxSource } }
}