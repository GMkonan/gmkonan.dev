import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    background: {
        width:"100%",
        height: "1000px",
        backgroundColor: "#1b1c1f",
        flexDirection:"column",
        alignItems: "center",
        backgroundSize: "cover",
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        [theme.breakpoints.down('sm')] : {
            height: "auto",
        }
    },
    articles: {
        display:"flex",
            flexDirection:"row",
            alignItems:"center",
            justifyContent:"center",
            justify:"center",
            paddingBottom: "9rem",
            [theme.breakpoints.down('sm')] : {
                flexDirection:"column",
                paddingTop:"3rem",
                paddingBottom:"5rem",
                
            }
    },
    article: {
        margin: "1rem",
    },
    articleCard: {
        backgroundColor: "#323437",
        width: "330px",
        height: "360px",
        color: "white",
        borderRadius: 20,
        
    },
    dividerColor: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: "#ffffff",
        fontSize: "3rem",
        height: "0.1rem",
        marginTop: "-10rem",
        [theme.breakpoints.down('sm')] : {
            marginTop: "-0.5rem",
        }
    },
    title: {
        position: "relative",
        fontFamily:"Courier New",
        color: "white",
        fontSize: "3rem",
        letterSpacing: "0.4rem",
        display: "flex",
        justifyContent: "center",
        paddingTop: "2rem",
    },
  }));

export default useStyles;