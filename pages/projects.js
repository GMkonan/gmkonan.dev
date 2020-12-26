import React from 'react';
import {Box, Typography, makeStyles, Grid, Divider } from '@material-ui/core';
import Projeto from './../components/project';
import websiteImage from "./../images/website.png";
import blog from "./../images/blog.png";
import anime from "./../images/anime.jpg";
import githubImage from "./../images/github.png";
import Carousel from 'react-material-ui-carousel'

// Change title font and text in card font aswell as fontsize
//port to mobile
// maybe change cards size

const Projetos = () => {
    const useStyles = makeStyles(theme => ({
        background: {
            width:"100%",
            height: "1000px",
            justifyContent: "center",
            display: "flex",
            flexDirection:"column",
            alignItems: "center",
            backgroundSize: "cover",
            [theme.breakpoints.down('sm')] : {
                height: "auto",
            }
        },
        title: {
            position: "relative",
            color: "white",
            fontSize: "3rem",
            letterSpacing: "0.4rem",
            display: "flex",
            justifyContent: "center",
            paddingBottom:"5rem",
            [theme.breakpoints.down('lg')] : {
                paddingBottom:"3rem"
            },            
            [theme.breakpoints.down('md')] : {
                paddingTop:"5rem"
            },
            [theme.breakpoints.down('sm')] : {
                paddingBottom:"4rem"
            }
            
        },
        projects: {
            display:"flex",
            flexDirection:"row",
            alignItems:"center",
            justifyContent:"center",
            justify:"center",
            [theme.breakpoints.down('sm')] : {
                flexDirection:"column",
                paddingTop:"3rem",
                paddingBottom:"5rem"
            }
        }
    }))
    const classes = useStyles();

    const projects = [
        {
            title: "Portfolio Website",
            image: websiteImage,
            titleCard: "Portfolio Website",
            text: "A website I made as my portfolio with React, NextJS and Material UI",
            url: "https://github.com/GMkonan/portfolio",
            buttonText: "Github",
            url2: "https://guilhermemonteiro.dev",
            buttonText2:"Website"
        },
        {
            title: "Blog Website",
            image: blog,
            titleCard: "Blog Website",
            text: "A website I made So I can post my articles using NextJS and styled-components",
            url: "https://github.com/GMkonan/MyBlog",
            buttonText: "Github",
            url2: "https://my-blog-vert.vercel.app/",
            buttonText2:"Website"
        },
        {
            title: "Github Automation",
            image: githubImage,
            titleCard: "Github Automation",
            text: "A Script I made using python to automate the process of starting a project",
            url: "https://github.com/GMkonan/githubAutomation"
        },
        {
            title: "Anime Scraper",
            image: anime,
            titleCard: "Anime Scraper",
            text: "A script I made with python to download animes faster",
            url: "https://github.com/GMkonan/anime_scraper"
        },
    ]

    return(
        <Box bgcolor="#212326" className={classes.background} id="projetos">
            <Typography className={classes.title} style={{ fontFamily:"Courier New" }} variant="h3">PROJECTS</Typography>
            <Carousel>
                {
                    projects.map((project, i) => <Projeto key={i}
                    title={project.title}
                    image={project.image}
                    titleCard={project.titleCard}
                    text={project.text}
                    url={project.url} 
                    buttonText={project.buttonText}
                    url2={project.url2}
                    buttonText2={project.buttonText2}/>
                    )
                }
                
            </Carousel>
        </Box>
    )
}

export default Projetos;