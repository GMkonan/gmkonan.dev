import styled from "styled-components"
import { QUERIES } from "../constants"
import CodeSnippet from "./CodeSnippet"

const components = { 
    h2: (props:any) => <H2 variant="h2" {...props} />,
    h3: (props:any) => <H3 variant="h3" {...props} />,
    h4: (props:any) => <H4 variant="h4" {...props} />,
    p: (props:any) => <P variant="p" {...props} />,
    li: (props:any) => <LI variant="li" {...props} />,
    ul: (props:any) => <UL variant="ul" {...props} />,
    a: (props:any) => <A variant="a" {...props} />,
    strong: (props:any) => <Strong variant="strong" {...props} />,
    pre: (props:any) => <PRE variant="pre" {...props} />,
    img: (props:any) => <IMG variant="img" {...props} />,
    CodeSnippet: (props:any) => <CodeSnippet {...props} />
  }

//elements from mdx
const H2 = styled.h2`
  margin: 20px 0;
  color: var(--primary);
`

const H3 = styled.h3`
  margin: 20px 0;
  color: var(--primary);
`

const H4 = styled.h4`
  margin: 20px 0;
  color: var(--primary);
`

const P = styled.p`
  color: var(--gray);
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 20px;

  @media ${QUERIES.laptop} {
    //font-size: 1.2rem;
}
@media ${QUERIES.tablet} {
  
}
@media ${QUERIES.phone} {
  /* width: 350px;
  height: auto; */
  font-size: 1rem;
}
`

const LI = styled.li`
  display: flex;
  align-items: flex-start;
  font-weight: 500;
  //list-style-position: inside; //maintain numbers together, making padding affect list
  color: var(--gray);

  &::before {
    content: '->';
    margin-right: 8px;
  }
`

const UL = styled.ul`
  
`

const A = styled.a`
  text-decoration: none;
  color: var(--red); //#ef4565
  font-weight: 600;
  &:hover {
    text-decoration: revert;
  }
`

const Strong = styled.strong`
  color: var(--blue400); //#3da9fc
`

const PRE = styled.pre`
  @media ${QUERIES.laptop} {
    //font-size: 1.2rem;
}
@media ${QUERIES.tablet} {
  
}
@media ${QUERIES.phone} {
  width: 350px;
}
`

const IMG = styled.img`
  @media ${QUERIES.laptop} {
  
}
@media ${QUERIES.tablet} {
  
}
@media ${QUERIES.phone} {
  max-width: 350px;
}
`

export default components