import React from 'react';
import { Box, 
    Grid,
    CardActions,
    Typography,
    Divider,
    makeStyles,
    Card,
    CardContent,
    CardActionArea,
 } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    background: {
        width:"100%",
        height: "1000px",
        backgroundColor: "#1b1c1f",
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
    articles: {
        display:"flex",
            flexDirection:"row",
            alignItems:"center",
            justifyContent:"center",
            justify:"center",
            paddingBottom: "9rem",
            [theme.breakpoints.down('sm')] : {
                flexDirection:"column",
                paddingTop:"3rem",
                paddingBottom:"5rem",
                
            }
    },
    article: {
        margin: "1rem",
    },
    articleCard: {
        backgroundColor: "#323437",
        width: "330px",
        height: "360px",
        color: "white",
        borderRadius: 20,
        
    },
    dividerColor: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: "#ffffff",
        fontSize: "3rem",
        height: "0.1rem",
        marginTop: "-10rem",
        [theme.breakpoints.down('sm')] : {
            marginTop: "-0.5rem",
        }
    },
    title: {
        position: "relative",
        fontFamily:"Courier New",
        color: "white",
        fontSize: "3rem",
        letterSpacing: "0.4rem",
        display: "flex",
        justifyContent: "center",
        paddingTop: "2rem",
    },
  }));

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