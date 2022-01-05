import { MDXRemote } from 'next-mdx-remote'
import MaxWidthWrapper from '../../components/MaxWidthWrapper'
import styled from 'styled-components';
import components from '../../components/BaseMdComponents';
import { getPostsBySlug, getPostsData } from '../../api';

export default function Slug({ source }: any) {

  //consider making an "aside" at the left of the article
  return (
    <MaxWidthWrapper>
      <Wrapper>
        <ArticleContainer>
          <MDXRemote {...source} components={components} />
        </ArticleContainer>
      </Wrapper>
    </MaxWidthWrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const ArticleContainer = styled.div`
  //pass this width when aside is done
  //width: 800px;
  
  //margin: 56px 0;
  //background: #232946;
  border: 2px solid #2d3458;
  border-radius: 32px;
  padding: 32px  64px;
  //font-size: 1.1rem;
  line-height: 26px;
  margin: 60px 0;
`

export async function getStaticProps({params}: any) {

  const mdxSource = await getPostsBySlug(params)

  return { props: { source: mdxSource } }
}

export async function getStaticPaths() {
    
  const frontmatter = getPostsData()

  return {
    paths: frontmatter.map((post:any) => ({params: { slug: post.slug }})),
    fallback: false
  }
}