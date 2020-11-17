import React from 'react';
import { Button, Box, makeStyles,
Typography,
AppBar,
Toolbar,
 IconButton
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

//make slide down, the navbar dissapears
// maybe make a button to go to the top, see https://material-ui.com/components/app-bar/ for more
// attach URLS to buttons and make function to scroll to the part of the page they belong (by ID)

const NavBar = () => {

    const useStyles = makeStyles((theme) => ({
        hideButtons: {
            [theme.breakpoints.down('xs')]:{
                display:"none"
            }
          },
          hideIconMenu: {
            [theme.breakpoints.up('sm')]:{
                display: "none"
            }
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
          color: "Black"
        },
        appbar: {
            background: "#ffffff"
        }
    }));
    
    const scrollTo = (id) => {
        const element = document.getElementById(id);
        element.scrollIntoView({ behavior: "smooth" });
      };

    const classes = useStyles();

    return(
        <Box>
            <AppBar className={classes.appbar}>
                <Toolbar>
                    <Typography variant="h6" style={{flex: 1}} className={classes.title}>Guilherme</Typography>
                    <IconButton edge="end" className={classes.hideIconMenu}>
                        <MenuIcon />
                    </IconButton>
                    <div className={classes.hideButtons}>
                        <Button className={classes.button} onClick={() => scrollTo("about-me")}>About me</Button>
                        <Button className={classes.button} onClick={() => scrollTo("projetos")}>Projects</Button>
                        <Button className={classes.button} onClick={() => scrollTo("contact")}>Contact</Button>
                    </div>
                </Toolbar>
            </AppBar>
        </Box>
    )
}
 
export default NavBar;
