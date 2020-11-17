import React from 'react';
import {Box, Typography, makeStyles} from '@material-ui/core';

const Projetos = () => {
    const useStyles = makeStyles({
        background: {
            width:"auto",
            height: "99.4vh",
            marginLeft: -8,
            marginRight: -8,
            justifyContent: "center",
            display: "flex",
            alignItems: "center",
            backgroundSize: "cover",
        },
        title: {
            position: "relative",
            color: "white",
            fontSize: "3rem"

        }
    })
    const classes = useStyles();

    return(
        <Box bgcolor="#212326" className={classes.background} id="projetos">
            <Typography className={classes.title}>Projects</Typography>
        </Box>
    )
}

export default Projetos;