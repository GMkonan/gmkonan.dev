import styled from "styled-components"

const components = { 
    h2: (props:any) => <H2 variant="h2" {...props} />,
    h3: (props:any) => <H3 variant="h3" {...props} />,
    h4: (props:any) => <H4 variant="h4" {...props} />,
    p: (props:any) => <P variant="p" {...props} />,
    li: (props:any) => <LI variant="li" {...props} />,
    ul: (props:any) => <UL variant="ul" {...props} />,
    a: (props:any) => <A variant="a" {...props} />,
  }

//elements from mdx
const H2 = styled.h2`
  margin: 20px 0;
  color: #094067;
`

const H3 = styled.h3`
  margin: 20px 0;
  color: #094067;
`

const H4 = styled.h4`
  margin: 20px 0;
  color: #094067;
`

const P = styled.p`
  color: #5f6c7b;
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 20px;
`

const LI = styled.li`
  display: flex;
  align-items: flex-start;
  font-weight: 500;
  //list-style-position: inside; //maintain numbers together, making padding affect list
  color: #5f6c7b;

  &::before {
    content: '->';
    margin-right: 8px;
  }
`

const UL = styled.ul`
  
`

const A = styled.a`
  text-decoration: none;
  color: inherit;
  font-weight: 500;
  &:hover {
    text-decoration: revert;
  }
`


export default components