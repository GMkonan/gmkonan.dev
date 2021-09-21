 const Layout = (props) => {
     
    return (
        <>
            <style global jsx>{`
            html,
            body,
            #__next {
            height: 100vh;
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