import React from 'react';
import { Box, 
    Grid,
    CardActions,
    makeStyles,
    Card,
    CardContent,
    CardActionArea,
 } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    background: {
        width:"100%",
        height: "1000px",
        backgroundColor: "#2f3133",
        justifyContent: "center",
        flexDirection:"column",
        alignItems: "center",
        backgroundSize: "cover",
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
    },
    articles: {
        display:"flex",
            flexDirection:"row",
            alignItems:"center",
            justifyContent:"center",
            justify:"center",
            paddingBottom: "6rem",
    },
    article: {
        margin: "1rem",
    },
    articleCard: {
        backgroundColor: "grey",
        width: "330px",
        height: "360px",
    },
  }));

const Articles = ({ posts }) => {
    const classes = useStyles()
    
    
    return(
        <Box className={classes.background} id="articles">
           <Grid className={classes.articles} container>
           {posts.map((post, i) => 
           <Grid key={i} item className={classes.article}> 
               <CardActionArea onClick={() => window.open(post.url)}>
               <Card className={classes.articleCard}>
                   <CardContent>
                        <h1>{post.title}</h1>
                        <span><b>{post.readable_publish_date}</b></span> <br />
                        <span style={{fontSize: "0.8rem"}}><b>{post.tag_list.map((tags) => `#${tags} `)}</b></span>
                        <p style={{fontSize: "1rem"}}>{post.description}</p>
                    </CardContent>
                   
                    {/*
                    <CardActions>
                        <Button size="small">Website</Button>
                        <Button size="small">DevTo</Button>
                    </CardActions>
                    */}
               </Card>
               </CardActionArea>
            </Grid>
           )}
           </Grid>
        </Box>
    )
}

export default Articles;