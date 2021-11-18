import styled from "styled-components";

const Blog = () => {
    return(
        <Wrapper>
            <MaxWrapper>
                <Container>
                    <TagTitle>
                        React <br /> 4 articles <br /> Most popular one: ...
                    </TagTitle>
                    <ArticleWrapper>
                        <Article>
                            Stuff
                        </Article>
                        <Article>
                            Stuff
                        </Article>
                        <Article>
                            Stuff
                        </Article>
                        <Article>
                            Stuff
                        </Article>
                        <Article>
                            Stuff
                        </Article>
                        <Article>
                            Stuff
                        </Article>
                    </ArticleWrapper>
                </Container>
            </MaxWrapper>
        </Wrapper>
    );
}

const Wrapper = styled.div`
display: flex;
flex-direction: column;
`

const ArticleWrapper = styled.div`
display: flex;
flex-direction: column;
gap: 20px;
margin-top: 60px;
`

const TagTitle = styled.div`
width: 40%;
margin-right: 7%;
font-size: 3rem;
font-weight: 600;
color: #b8c1ec;
font-family: Raleway;
position: sticky;
right: 0;
top: 50px;
float: left;
`

//probably make MaxWrapper a component since is used in other places,
//but here is used with display flex so we are gonna extend the component here later.
const MaxWrapper = styled.div`
display: block;
position: relative;
width: 1100px;
margin: 0 auto;
`

const Container = styled.div`
display: flex;
align-items: flex-start;
`

const Article = styled.article`
width: 550px;
height: 300px;
background: #fffffe;
color: #232946;
border-radius: 10px;
`

export default Blog;