import styled from "styled-components";
import MaxWidthWrapper from "../components/MaxWidthWrapper";

const Blog = () => {
    return(
        <Container>
            <MaxWidthWrapper>
                <Wrapper>
                    <Article>
                        <Title>Why use keys in React</Title>
                        <Description>asdasdasdasdasdasd asdasdasd asdasdasdas dasdasd asdasdasdas dasdasd asd asdasdas</Description>
                    </Article>
                    <Article>
                        <Title>Why use keys in React</Title>
                        <Description>asdasdasdasdasdasd asdasdasd asdasdasdas dasdasd asdasdasdas dasdasd asd asdasdas</Description>
                    </Article>
                    <Article>
                        <Title>Why use keys in React</Title>
                        <Description>asdasdasdasdasdasd asdasdasd asdasdasdas dasdasd asdasdasdas dasdasd asd asdasdas</Description>
                    </Article>
                    <Article>
                        <Title>Why use keys in React</Title>
                        <Description>asdasdasdasdasdasd asdasdasd asdasdasdas dasdasd asdasdasdas dasdasd asd asdasdas</Description>
                    </Article>
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
`

const Article = styled.article`
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
`

export default Blog;