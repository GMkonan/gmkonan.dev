import styled from "styled-components";
import MaxWidthWrapper from "@components/MaxWidthWrapper";

const Projects = () => {
  return (
    <Container>
      <MaxWidthWrapper>
        <Title>Projects</Title>
        <Wrapper>
          <Project>

          </Project>
          <Project>

          </Project>
          <Project>

          </Project>
        </Wrapper>
      </MaxWidthWrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background: #232946;
`;

const Title = styled.h1`
  margin-top: 125px;
  font-size: 5rem;
  color: #d4d8f0;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 56px;
`;

const Project = styled.div`
border: 2px solid white;
width: 300px;
height: 250px;
border-radius: 5%;
`

export default Projects;

