import React from 'react';
import { Button, 
Box, 
makeStyles,
Typography,
AppBar,
Toolbar,
IconButton,
Drawer,
List,
ListItem,
Hidden,
Divider
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
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
        },
        title: {
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
    
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };

    return(
        <Box>
            <AppBar className={classes.appbar}>
                <Toolbar>
                    <Typography variant="h6" style={{flex: 1}} className={classes.title}>Guilherme</Typography>
                    <IconButton edge="end" className={classes.hideIconMenu} onClick={handleDrawerOpen}>
                        <MenuIcon />
                    </IconButton>
                    <div className={classes.hideButtons}>
                        <Button className={classes.button} onClick={() => scrollTo("about-me")}>About me</Button>
                        <Button className={classes.button} onClick={() => scrollTo("projetos")}>Projects</Button>
                        <Button className={classes.button} onClick={() => scrollTo("contact")}>Contact</Button>
                    </div>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="persistent"
                anchor="right"
                open={open}
                >
                <div>
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronRightIcon />
                    </IconButton>
                </div>
                <Divider />
                <List>
                    <ListItem>
                        <Button onClick={() => scrollTo("about-me")}>About me</Button>
                    </ListItem>
                    <ListItem>
                        <Button onClick={() => scrollTo("projetos")}>Projects</Button>
                    </ListItem>
                    <ListItem>
                        <Button onClick={() => scrollTo("contact")}>Contact</Button>
                    </ListItem>
                </List>
            </Drawer>
        </Box>
    )
}
 
export default NavBar;
