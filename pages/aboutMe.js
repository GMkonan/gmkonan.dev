import React from 'react';
import {Box, makeStyles, Typography, createMuiTheme, ThemeProvider, Grid} from '@material-ui/core';
import {DiPython, DiGit, DiTerminal, DiJavascript1} from 'react-icons/di';
const AboutMe = () => {

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
            position: "relative",
            right: "5rem",
            paddingLeft:"7rem",
            paddingTop: "3rem"
        },
        icons: {
            marginLeft: "auto",
            display: "flex",
            justify:"center",
            alignItems: "center"
        },
    }));

    const theme = createMuiTheme({
        typography: {
          fontFamily: "Serif"
        },
      });

    const classes = useStyles();

    return(
        <ThemeProvider theme={theme} >
        <Box width={1} color="white" bgcolor="#1b1c1f" className={classes.div} id="about-me">
            <Typography className={classes.title} style={{ fontFamily:"Courier New" }} variant="h3">ABOUT ME</Typography>
            <Typography className={classes.text} variant="h6">My name is Guilherme Monteiro Pereira,
            also known as Konan and I'm a Self-Learning Software Developer.<br /> 
            I have always had been really curious,researching ideas that interest me and that got me into <br />
            programming,I love the tech world and I'm always learning new things while working in projects.</Typography>
            <Typography variant="h3">Skill Set</Typography>
            <Grid container direction="row" justify="center" className={classes.icons}>
                <Grid item>
                    <DiPython size="5em" className={classes.icon}/>
                </Grid>
                <Grid item>
                    <DiJavascript1 size="5em" className={classes.icon}/>
                </Grid>
                <Grid item>
                    <DiTerminal size="5em" className={classes.icon}/>
                </Grid>
                <Grid item>
                    <DiGit size="5em" className={classes.icon}/>
                </Grid>
            </Grid>
        </Box>
        </ThemeProvider>
    )
}

export default AboutMe;