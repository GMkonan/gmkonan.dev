import React from 'react';
import {Box, Typography, makeStyles,Button,
    Divider, 
    Card, 
    CardMedia, 
    CardContent,
    CardActionArea,
    CardActions} from '@material-ui/core';

const Projeto = ({image,titleCard,title,text, url}) => {

    const useStyles = makeStyles({
        root: {
          maxWidth: 345,
          backgroundColor:"#1d1f1e"
        },
        media: {
          height: 200,
        },
        title:{
            color:"white"
        },
        text: {
            color:"white"
        }
      });

      const classes = useStyles();

    return(
    <Card className={classes.root}>
      <CardActionArea onClick={() => window.open(url)} >
        <CardMedia
          className={classes.media}
          image={image}
          title={titleCard}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
            {title}
          </Typography>
          <Typography variant="body2" className={classes.text} component="p">
            {text}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant="contained" size="small" onClick={() => window.open(url)}>
          Github
        </Button>
      </CardActions>
    </Card>
    )
}

export default Projeto;