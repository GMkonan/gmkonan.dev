import React from 'react';
import {Box, Typography, makeStyles, Grid  } from '@material-ui/core';
import Projeto from './../components/project';
import imageProjeto1 from "./../images/website.png";

// Change title font and text in card font aswell as fontsize
//port to mobile
// maybe change cards size

const Projetos = () => {
    const useStyles = makeStyles({
        background: {
            width:"100%",
            height: "99.4vh",
            justifyContent: "center",
            display: "flex",
            alignItems: "center",
            backgroundSize: "cover",
        },
        title: {
            position: "relative",
            color: "white",
            fontSize: "3rem",
            left:"13rem",
            bottom: "18rem",
            letterSpacing: "0.4rem",
            display: "flex",
            justify: "center"
            
        },
        grid: {
            marginLeft: "9rem"
        }
    })
    const classes = useStyles();

    return(
        <Box bgcolor="#212326" className={classes.background} id="projetos">
            <Typography className={classes.title} style={{ fontFamily:"Monospace" }}>PROJECTS</Typography>
            <Grid container direction="row" spacing={5} className={classes.grid} >
                <Grid item>
                    <Projeto 
                    title="Anime Downloader"
                    image={imageProjeto1}
                    titleCard="Anime Downloader"
                    text="A small Web Scraping Script using Python and Selenium to download Animes from the website Anbient.com"
                    url="https://github.com/GMkonan/anime_scraper"
                    />
                </Grid>
                <Grid item>
                <Projeto 
                    title="Portfolio Website"
                    image={imageProjeto1}
                    titleCard="Portfolio Website"
                    text="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarcticaa"
                    url="https://github.com/mui-org/material-ui/issues/4163"
                    />
                </Grid>
                <Grid item>
                <Projeto 
                    title="Projeto1"
                    image={imageProjeto1}
                    titleCard="Projeto1"
                    text="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarcticaa"
                    url="https://github.com/mui-org/material-ui/issues/4163"
                    />
                </Grid>
                
                
            </Grid>
            
        </Box>
    )
}

export default Projetos;