import {Box, makeStyles, Typography, createMuiTheme, ThemeProvider, Divider} from '@material-ui/core';
import websiteImage from "../images/EU.jpg";

const AboutMe = () => {

    //use breakpoints in specific parts that break im mobile like title position (gets up)

    const useStyles = makeStyles((theme) => ({
        div: {
            width: "auto",
            height: "1000px",
            maxHeight:"auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundSize: "cover",
            [theme.breakpoints.down('md')] : {
                height:"auto",
                
            }
        },
        title:{
            position: "relative",
            bottom: "5rem",
            letterSpacing: "0.4rem",
            display: "flex",
            justify: "center",
            justifyContent:"center",
            [theme.breakpoints.down('md')] : {
                paddingTop:"10rem"
            }
            
        },
        text: {
            position: "relative",
            fontSize: "1.4rem",
            color: "white",
            margin: "1rem",
            lineHeight: "1.6rem",
            bottom: "2rem",
            
        },
        icon: {
            display:"flex",
            alignItems:"center",
            position:"relative",
            justifyContent:"center",
        },
        dividerColor: {
            width: '100%',
            maxWidth: 360,
            backgroundColor: "#ffffff",
            fontSize: "3rem",
            height: "0.1rem",
            marginTop: "-5rem",
        }
    }));

    const theme = createMuiTheme({
        typography: {
          fontFamily: "Serif"
        },
      });

    const classes = useStyles();

    return(
        <ThemeProvider theme={theme} >
            <Box color="white" bgcolor="#1b1c1f" className={classes.div} id="about-me">
                <Typography className={classes.title} style={{ fontFamily:"Courier New" }} variant="h3">ABOUT ME</Typography>
                <Divider className={classes.dividerColor} />
                <img src={websiteImage} height="300px" style={{marginTop: "30px", marginBottom: "40px", borderRadius: "20px"}}  />
                <Typography className={classes.text} variant="h6">My name is Guilherme Monteiro Pereira,
                also known as Konan and I'm a Self-Learning Software Developer.<br />  <br />
                I have always had been really curious, researching ideas that interest me and that got me into 
                programming.<br /><br /> I love the tech world and I'm always learning new things while working in projects.</Typography>
            </Box>
        </ThemeProvider>
    )
}

export default AboutMe;