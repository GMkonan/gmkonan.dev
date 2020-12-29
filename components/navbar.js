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
Divider,
Link
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

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
        link: {
            textDecoration: 'none',
            flex: 1,
            '&:hover':{
              cursor: 'pointer',
              textDecoration: "none",
            }
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
        setOpen((prev) => !prev);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };

    return(
        <Box>
            <AppBar className={classes.appbar}>
                <Toolbar>
                    <Link className={classes.link} onClick={() => scrollTo("frontPage")}>
                        <Typography variant="h6" className={classes.title}>Guilherme</Typography>
                    </Link>
                    <IconButton edge="end" className={classes.hideIconMenu} onClick={handleDrawerOpen}>
                        <MenuIcon />
                    </IconButton>
                    <div className={classes.hideButtons}>
                        <Button className={classes.button} onClick={() => scrollTo("about-me")}>About me</Button>
                        <Button className={classes.button} onClick={() => scrollTo("projetos")}>Projects</Button>
                        <Button className={classes.button} onClick={() => scrollTo("articles")}>Articles</Button>
                        <Button className={classes.button} onClick={() => scrollTo("contact")}>Contact</Button>
                    </div>
                </Toolbar>
            </AppBar>
            <div onClick={handleDrawerClose}>
            <Drawer
                variant="persistent"
                anchor="right"
                open={open}
                >
                <Divider />
                <List>
                    <ListItem>
                        <Button onClick={() => scrollTo("about-me")}>About me</Button>
                    </ListItem>
                    <ListItem>
                        <Button onClick={() => scrollTo("projetos")}>Projects</Button>
                    </ListItem>
                    <ListItem>
                        <Button onClick={() => scrollTo("articles")}>Articles</Button>
                    </ListItem> 
                    <ListItem>
                        <Button onClick={() => scrollTo("contact")}>Contact</Button>
                    </ListItem>                    
                </List>
            </Drawer>      
            </div> 
        </Box>
    )
}
 
export default NavBar;
