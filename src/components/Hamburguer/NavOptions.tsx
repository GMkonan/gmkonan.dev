import ThemeToggle from "@components/ThemeToggle";
import { QUERIES } from "@constants";
import { useEffect } from "react";
import styled from "styled-components"

interface BurguerProps {
    open: boolean;
  }

const NavOptions = ({open, children}: any) => {

    useEffect(() => {
      if(open == true) {
        document.body.style.position = "fixed";
      }else {
        document.body.style.position = ''
      }
      console.log("dasd")
    }, [open])

    return(
      
      <MobileList open={open}>
        {children.map((child:any, i:any) => (
            <div key={i}>{child}</div>
        ))}
        <BottomOptions>
          <ThemeToggle />
        </BottomOptions>
      </MobileList>
      
    )
  }

  const Container = styled.div`
    //display: block;
    position: fixed;
    overflow: hidden;
    width: 100vw;
    height: 100vh;
    inset: 0px;
    z-index: 1;
  `

  const MobileList = styled.div<BurguerProps>`
  display: none;
  flex-flow: row nowrap;
  z-index: 1;
  div {
    padding: 18px 10px;
  }

  
  @media ${QUERIES.phone} {
    display: flex;
    flex-flow: column nowrap;
    background-color: var(--blue50-blurred);
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100%;
    width: 100%;
    padding-top: 3.5rem;
    transition: transform 0.3s linear;
    backdrop-filter: blur(8px);
  }
`

const BottomOptions = styled.div`
  position: absolute;
  bottom: 0;
  margin: 48px 12px;
`

export default NavOptions;