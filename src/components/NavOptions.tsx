import styled from "styled-components"

interface BurguerProps {
    open: boolean;
  }

const NavOptions = ({open, children}: any) => {

    return(
      <MobileList open={open}>
        {children.map((child:any, i:any) => (
            <li key={i}>{child}</li>
        ))}
      </MobileList>
    )
  }

  const MobileList = styled.ul<BurguerProps>`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  z-index: 1;
  li {
    padding: 18px 10px;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: var(--blue50);
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 100%;
    padding-top: 3.5rem;
    transition: transform 0.3s linear;
    li {
      color: #fff;
    }

    
  }
`

export default NavOptions;