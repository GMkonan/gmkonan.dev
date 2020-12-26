import React from 'react';
import {Box, Typography, makeStyles,Button,
    Divider, 
    Card, 
    CardMedia, 
    CardContent,
    CardActionArea,
    CardActions} from '@material-ui/core';

const Projeto = ({image,titleCard,title,text, url, url2 ,buttonText, buttonText2}) => {

    const useStyles = makeStyles(theme =>({
        root: {
          width: "1300px",
          backgroundColor:"#1c1c1b",
          [theme.breakpoints.down('lg')] : {
            width:"900px"
          },
          [theme.breakpoints.down('sm')] : {
            width: 500
        },
        [theme.breakpoints.down('xs')] : {
          width: 300
      },
        },
        div: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          margin: "1rem",
        },
        media: {
          height: "42rem",
          boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
          borderRadius: "4px",
          [theme.breakpoints.down('lg')] : {
            height: "28rem"
          },
          [theme.breakpoints.down('sm')] : {
            height: 200
        },
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
    <Card className={classes.root}>
      <CardActionArea onClick={() => window.open(url)} >
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
            {title}
          </Typography>
          <Typography variant="body2" className={classes.text} component="p">
            {text}
          </Typography>
        </CardContent>
        <CardMedia
          className={classes.media}
          image={image}
          title={titleCard}
        />
      </CardActionArea>
      <CardActions>
        <Button variant="contained" size="small" onClick={() => window.open(url)}>
            {buttonText}
        </Button>
        {url2 == null ? null : 
        <Button variant="contained" size="small" onClick={() => window.open(url2)}>
        {buttonText2}
        </Button>
        }
      </CardActions>
    </Card>
    </Box>
    )
}

export default Projeto;