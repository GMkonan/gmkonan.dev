import { MDXRemote } from "next-mdx-remote";
import MaxWidthWrapper from "../../components/MaxWidthWrapper";
import styled from "styled-components";
import components from "../../components/BaseMdComponents";
import { getPostsBySlug, getPostsData } from "../../api";
import { Breadcrumbs, Crumb } from "../../components/Breadcrumb";
import { QUERIES } from "../../constants";

export default function Slug({ source, title }: any) {
  //consider making an "aside" at the left of the article
  return (
    <>
      <TitleWrapper>
        <ArticleInfoWrapper>
          <Breadcrumbs>
            <Crumb href="/">Home</Crumb>
            <Crumb href="/articles">Articles</Crumb>            
          </Breadcrumbs>
          <Title>{title}</Title>
        </ArticleInfoWrapper>
      </TitleWrapper>
      <Container>
        <MaxWidthWrapper>
          <Wrapper>
            <ArticleContainer>
              <MDXRemote {...source} components={components} />
            </ArticleContainer>
          </Wrapper>
        </MaxWidthWrapper>
      </Container>
    </>
  );
}

const ArticleInfoWrapper = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 56px 56px;

  @media ${QUERIES.laptop} {
    //font-size: 1.2rem;
}
@media ${QUERIES.tablet} {
  
}
@media ${QUERIES.phone} {
  padding: 16px 16px;
}
`

const TitleWrapper = styled.div`
  display: flex;
  background: var(--blue50);
  height: 170px;
`;

const Title = styled.h1`
  color: var(--primary);
  //padding: 64px 64px;
  margin-top: 20px;
`;

const Container = styled.div`
  background: var(--white);
  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ArticleContainer = styled.div`
  //pass this width when aside is done
  //width: 800px;
  padding: 32px 64px;
  line-height: 26px;
  margin: 60px 0;

  @media ${QUERIES.laptop} {
    //font-size: 1.2rem;
}
@media ${QUERIES.tablet} {
  
}
@media ${QUERIES.phone} {
  padding: 64px 16px;
  margin: 0;
}
`;

export async function getStaticProps({ params }: any) {
  const {mdxSource, metadata} = await getPostsBySlug(params);

  return { props: { source: mdxSource, title: metadata.title } };
}

export async function getStaticPaths() {
  const frontmatter = getPostsData();

  return {
    paths: frontmatter.map((post: any) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
}
