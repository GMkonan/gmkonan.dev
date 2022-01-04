import styled from "styled-components"

const components = { 
    h2: (props:any) => <H2 variant="h2" {...props} />,
    h3: (props:any) => <H3 variant="h3" {...props} />,
    h4: (props:any) => <H4 variant="h4" {...props} />,
    p: (props:any) => <P variant="p" {...props} />,
    li: (props:any) => <LI variant="li" {...props} />,
    a: (props:any) => <A variant="a" {...props} />,
  }

//elements from mdx
const H2 = styled.h2`
  margin: 20px 0;
  color: #d4d8f0;
`

const H3 = styled.h3`
  margin: 20px 0;
  color: #d4d8f0;
`

const H4 = styled.h4`
  margin: 20px 0;
  color: #d4d8f0;
`

const P = styled.p`
  color: white;
  font-size: 1.2rem;
  margin-bottom: 20px;
`

const LI = styled.li`
  list-style-position: inside; //maintain numbers together, making padding affect list
  color: white;
`

const A = styled.a`
  text-decoration: none;
  color: inherit;

  &:hover {
    text-decoration: revert;
  }
`


export default components