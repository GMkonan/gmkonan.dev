import React from 'react';
import {Box, makeStyles, Typography, createMuiTheme, ThemeProvider, Grid,ListItem,ListItemIcon,ListItemText, Icon, Divider} from '@material-ui/core';
import {DiPython, DiGit, DiTerminal, DiJavascript1, DiReact} from 'react-icons/di';
const AboutMe = () => {

    //use breakpoints in specific parts that break im mobile like title position (gets up)

    const useStyles = makeStyles((theme) => ({
        div: {
            width: "auto",
            height: "99.4vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundSize: "cover"
        },
        title:{
            position: "relative",
            right:"20rem",
            bottom: "5rem",
            letterSpacing: "0.4rem",
            display: "flex",
            justify: "center"
        },
        text: {
            position: "relative",
            fontSize: "1.3rem",
            color: "white",
            maxWidth: "100%",
            maxHeight: "100%",
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
            height: "0.1rem"
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
            <Typography className={classes.text} variant="h6">My name is Guilherme Monteiro Pereira,
            also known as Konan and I'm a Self-Learning Software Developer.<br /> 
            I have always had been really curious, researching ideas that interest me and that got me into <br />
            programming, I love the tech world and I'm always learning new things while working in projects.</Typography>
            <Typography variant="h3">Skill Set</Typography>
            <Divider className={classes.dividerColor} />
            <Box style={{display:"flex", alignItems:"center",justifyContent:"center",paddingTop:"7rem"}}>
            <DiPython size="13em" style={{paddingRight:"4rem"}} /> 
            <DiJavascript1 size="13em" style={{paddingRight:"4rem"}}/>
            <DiReact size="13em" style={{paddingRight:"4rem"}}/>
            <DiTerminal size="13em" style={{paddingRight:"4rem"}}/>
            <DiGit size="13em" style={{paddingRight:"4rem"}}/>
            </Box>
        </Box>
        </ThemeProvider>
    )
}

export default AboutMe;