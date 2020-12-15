import {DiPython, DiGit, DiTerminal, DiJavascript1, DiReact} from 'react-icons/di';
import {Box, makeStyles, Typography, Divider} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
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

const classes = useStyles();

const Skills = () => {
    
    return(
        <Box>
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