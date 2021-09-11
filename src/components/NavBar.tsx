import tw from 'twin.macro';

const NavBar = () => {
    
    const Item = tw.button`ml-8 text-xl text-brand-color font-inter font-semibold bg-transparent border-none cursor-pointer`;

    // Depending on your ideas this buttons will move user to other page or scroll to a specific part of the page (as SPA)
    // if you choose the scroll option take a look at a react lib (there is one only for this scroll effect)

    return (
        <div tw="flex">
            <Item>About</Item>
            <Item>Projects</Item>
            <Item>Blog</Item>
            <Item>Contact</Item>
        </div>
    );
}

export default NavBar;