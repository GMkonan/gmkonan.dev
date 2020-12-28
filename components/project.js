import React from 'react';
import {Box, Typography, makeStyles,Button,
    Divider, 
    Card, 
    CardMedia, 
    CardContent,
    CardActionArea,
    CardActions} from '@material-ui/core';

const Projeto = ({image,titleCard,title,text, url, url2 ,buttonText, buttonText2, tech}) => {

    const useStyles = makeStyles(theme =>({
        root: {
          //width: "30rem",
          //height: "25rem",
          //marginRight: "auto",
          //marginLeft: "auto",
          backgroundColor: "#52514f", //"#1c1c1b",
          justifyContent:"center"
      },
        div: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          //width: "100%",
          margin: "1rem"
        },
        media: {
          height: 200
        },
        title:{
            color:"white"
        },
        text: {
            color:"white"
        }
      }));

      const classes = useStyles();

    return(
      <Box className={classes.div}>
    <Card className={classes.root} elevation={10}>
      
      <CardActionArea onClick={() => window.open(url)} >
        <CardContent>
        <Typography  variant="h5" className={classes.title}>
            {title}
          </Typography>
        </CardContent>
        <CardMedia
          className={classes.media}
          image={image}
          title={titleCard}
        />
      </CardActionArea>
      <CardContent>
          <Typography className={classes.text}>
            {text} <br /> <br />
            <b>Tech Used:</b> <br /> {tech}
          </Typography>
        </CardContent>
      <CardActions style={{justifyContent: 'center'}}>
        <Button variant="contained"  onClick={() => window.open(url)}>
          {buttonText == null ? "Repo" : buttonText}
        </Button>
        {url2 == null ? null : 
        <Button variant="contained"  onClick={() => window.open(url2)}>
        {buttonText2}
        </Button>
        }
      </CardActions>
    </Card>
    </Box>
    )
}

export default Projeto;