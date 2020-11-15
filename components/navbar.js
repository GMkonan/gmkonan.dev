import React from 'react';
import { Button, Box, makeStyles,
Typography,
AppBar,
Toolbar,
 IconButton
} from '@material-ui/core';

//make slide down, the navbar dissapears
// maybe make a button to go to the top, see https://material-ui.com/components/app-bar/ for more
// attach URLS to buttons and make function to scroll to the part of the page they belong (by ID)

const NavBar = () => {

    const useStyles = makeStyles((theme) => ({
        div: {
            flex: 1,
          },
        button:{
            background: "inherit",
            fontSize: "0.9rem",
            height: 40,
            padding: "0 1rem",
            color: "black",
            //fontFamily: "bold",
            //fontWeight:"bold"
        },
        title: {
          //fontWeight:"bold"
        }
    }));
    

    const classes = useStyles();

    return(
        <div >
            <AppBar color="#ffffff">
                <Toolbar>
                    <Typography variant="h6" style={{flex: 1}} className={classes.title}>Guilherme</Typography>
                    <div>
                        <Button className={classes.button}>About me</Button>
                        <Button className={classes.button}>Projects</Button>
                        <Button className={classes.button}>Articles</Button>
                        <Button className={classes.button}>Contact</Button>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}
 
export default NavBar;
