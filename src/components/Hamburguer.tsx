import { useState } from "react";
import styled from "styled-components";
import Scroll from "../utils/Scroll";
import NavOptions from "./NavOptions";
import router from 'next/router'
interface BurguerProps {
  open: boolean;
}
//good to take a look if needed
//https://levelup.gitconnected.com/how-to-create-a-responsive-hamburger-navigation-menu-reactjs-and-styled-components-59ce167ed543

const Hamburguer = () => {
  const [open, setOpen] = useState(false);

  const handleOptionClick = () => {
    if(window.location.pathname == "/") {
      Scroll("Hero")
    } else {
      router.push('/')
    }
    //window.location.pathname == "/" ? Scroll("Hero") : router.push('/')
    setOpen(false)
  }

  return (
    <>
      <Burguer open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </Burguer>
      <NavOptions open={open}>
      <Link onClick={handleOptionClick}>About</Link>
                    
      <Link href="/articles">Articles</Link>
      </NavOptions>
    </>
  );
};

const Burguer = styled.div<BurguerProps>`
  //backdrop-filter: blur(6px);
  width: 2rem;
  height: 2rem;
  position: relative;
  top: 0px;
  right: 20px;
  z-index: 20;
  display: none;
  
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => (open ? "var(--blue400)" : "var(--primary)")};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

const Link = styled.a`
color: var(--primary);
font-size: 1.5rem;
text-decoration: none;
`

export default Hamburguer;
