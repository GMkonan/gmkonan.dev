import React from 'react';
import {Box, Typography, makeStyles, Grid, Divider } from '@material-ui/core';
import Projeto from '../components/Project/project';
import projects from '../data/projectData'

const Projetos = () => {
    const useStyles = makeStyles(theme => ({
        background: { 
            width:"100%",
            height: "auto",
            justifyContent: "center",
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
                paddingBottom:"5rem",
                
            }
        },
        dividerColor: {
            width: '100%',
            maxWidth: 360,
            backgroundColor: "#ffffff",
            fontSize: "3rem",
            height: "0.1rem",
            marginTop: "0.2rem",
        }
    }))
    const classes = useStyles();

    return(
        <Box  bgcolor="#212326" className={classes.background} id="projetos">
            <Typography className={classes.title} variant="h3">PROJECTS</Typography>
            <Divider className={classes.dividerColor} />
            <Box mt="7rem" mx="auto" maxWidth="1280px">
            <Grid container spacing={4} justify="center" alignItems="center" className={classes.projects} >
            {
        projects.map((project, i) => (
        <Grid key={i} item xs={12} sm={12} md={6} lg={4}>
        <Projeto
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
        </Box>
    )
}

export default Projetos;