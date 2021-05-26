import React from 'react';
import { Box, 
    Grid,
    Typography,
    Divider,
    Card,
    CardContent,
    CardActionArea,
 } from '@material-ui/core';
import useStyles from './styles';

const Articles = ({ posts }) => {
    const classes = useStyles()
    
    
    return(
        <Box className={classes.background} id="articles">
            <Typography className={classes.title} variant="h3">Articles</Typography>
            <Divider className={classes.dividerColor} />
           <Grid className={classes.articles} container>
           {posts.map((post, i) => 
           <Grid key={i} item className={classes.article}> 
               <CardActionArea onClick={() => window.open(post.url)}>
               <Card className={classes.articleCard}>
                   <CardContent>
                        <h1>{post.title}</h1>
                        <span><b>{new Date(post.published_at).toLocaleDateString()}</b></span> <br />
                        <span style={{fontSize: "0.8rem"}}><b>{post.tag_list.map((tags) => `#${tags} `)}</b></span>
                        <br /> <br />
                        <p style={{fontSize: "1.3rem", lineHeight: "1.8rem"}}>{post.description}</p>
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