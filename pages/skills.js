import {DiPython, DiGit, DiTerminal, DiJavascript1, DiReact} from 'react-icons/di';
import {Box, makeStyles, Typography, Divider} from '@material-ui/core';

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
    skills: {
        display:"flex", 
        alignItems:"center",
        justifyContent:"center",
        paddingTop:"5rem",
        [theme.breakpoints.down('md')] : {
            flexDirection:"column",
             
        }
    },
    dividerColor: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: "#ffffff",
        fontSize: "3rem",
        height: "0.1rem"
    }
}));

const Skills = () => {
    const classes = useStyles();



    return(
        <Box color="white" bgcolor="#1b1c1f" className={classes.div} id="skills">
        <Typography style={{justifyContent:"center"}} variant="h3">Skill Set</Typography>
        <Divider className={classes.dividerColor} />
        <Box className={classes.skills}>
        <DiPython size="10em"  /> 
        <DiJavascript1 size="10em" />
        <DiReact size="10em" />
        <DiTerminal size="10em" />
        <DiGit size="10em" />
        </Box>
        </Box>
    )
}

export default Skills;