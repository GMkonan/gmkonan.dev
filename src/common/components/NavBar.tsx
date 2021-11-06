import tw from 'twin.macro';

const NavBar = () => {
    
    const Item = tw.a`text-xl no-underline hover:underline text-brand-color font-inter font-semibold bg-transparent border-none cursor-pointer`;

    // Depending on your ideas this buttons will move user to other page or scroll to a specific part of the page (as SPA)
    // if you choose the scroll option take a look at a react lib (there is one only for this scroll effect)

    return (
      <div tw="flex sticky w-full h-16 m-4 gap-10">
            <Item>Projects</Item>
            <Item href="/blog">Posts</Item>  
      </div>
    );
}

export default NavBar;
