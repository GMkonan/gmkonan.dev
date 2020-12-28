import React from 'react';
import {Box, Typography, makeStyles, Grid } from '@material-ui/core';
import Projeto from './../components/project';
import projects from './../data/projectData'

const Projetos = () => {
    const useStyles = makeStyles(theme => ({
        background: {
            
            width:"100%",
            height: "auto",
            justifyContent: "center",
            display: "flex",
            flexDirection:"column",
            alignItems: "center",
            backgroundSize: "cover",
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            overflow: 'hidden',
            [theme.breakpoints.down('sm')] : {
                height: "auto",
            }
        },
        title: {
            fontFamily:"Courier New",
            position: "relative",
            color: "white",
            fontSize: "3rem",
            letterSpacing: "0.4rem",
            display: "flex",
            justifyContent: "center",
            paddingTop: "4rem",
            paddingBottom:"3rem",
            [theme.breakpoints.down('lg')] : {
                paddingBottom:"1rem"
            },            
            [theme.breakpoints.down('md')] : {
                paddingTop:"5rem",
            },
            [theme.breakpoints.down('sm')] : {
                paddingBottom:"1rem"
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
        },
    }))
    const classes = useStyles();

    return(
        <Box bgcolor="#212326" className={classes.background} id="projetos">
            <Typography className={classes.title} variant="h3">PROJECTS</Typography>
            <Grid container className={classes.projects} spacing={3}>
            {
        projects.map((project, i) => (
        <Grid item xs={12} sm={12} md={6} lg={4}>
        <Projeto key={i}
        title={project.title}
        image={project.image}
        titleCard={project.titleCard}
        text={project.text}
        url={project.url} 
        buttonText={project.buttonText}
        url2={project.url2}
        buttonText2={project.buttonText2}
        tech={project.tech}/>
        </Grid>
        ))}
            </Grid>
        </Box>
    )
}

export default Projetos;