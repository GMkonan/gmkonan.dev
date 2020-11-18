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
            width:"auto",
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
            bottom: "15rem",
            letterSpacing: "0.4rem",
            display: "flex",
            justify: "center"
            
        }
    })
    const classes = useStyles();

    return(
        <Box width={1} bgcolor="#212326" className={classes.background} id="projetos">
            <Typography className={classes.title}>Projects</Typography>
            <Grid container direction="row" spacing={2}>
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