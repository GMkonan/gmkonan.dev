import { ReactNode } from 'react';
import styled from 'styled-components';

type ChildrenType = {
    children: ReactNode
}
 
const MaxWidthWrapper = ({ children }: ChildrenType) => {
    return(
        <Wrapper>
            {children}
        </Wrapper>
    );
}

const Wrapper = styled.div`
width: 1100px;
margin: 0 auto;
`

export default MaxWidthWrapper;