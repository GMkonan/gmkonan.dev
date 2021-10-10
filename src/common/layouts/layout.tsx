import tw, { css } from 'twin.macro';

 const Layout = (props) => {
     
    /*
    change height 100vh to 100% in html and body, it leads
    to a better experience for mobile users.
    (test josh demos to see it)
    */

    return (
        <>
            <style global jsx>{`
            html,
            body,
            #__next {
            height: 100%;
            width: 100%;
            overflow: hidden;
            margin: 0;
            padding: 0;
            font-family: Inter;
            background-color: #f5f5f5;
            }`
            }</style>
        {props.children}  
        </>
    )
 }

 export default Layout