import React from 'react';
import FrontPage from './frontPage';
import AboutMe from './aboutMe';
import NavBar from '../components/navbar';
import Projetos from './projects';
import Contact from './contact';
import {Box} from '@material-ui/core';
import Skills from './skills';
import Articles from './[Articles]';
import axios from 'axios';

function HomePage({posts}) {
    return(
        
        <Box style={{ overflow: "hidden" }}>
            <NavBar />
            <FrontPage />
            <AboutMe />
            {/*<Skills /> */}
            <Projetos />
            <Articles posts={posts}/>
            <Contact />
            
        </Box>
        
    )
  }
  
  export default HomePage

//getServerSideProps can not be used in children components
//thats why the get articles is inside index
//https://stackoverflow.com/questions/61111933/unable-to-pass-props-in-next
  export async function getServerSideProps() {
    const posts = await axios.get('https://dev.to/api/articles', {
      params: {
        username: 'gmkonan',
        per_page: 3
      }
    }).then((res) => res.data)
    
    if (!posts) {
      return {
        notFound: true,
      }
    }
  
    return {
      props: {
        posts
      },
    }
  }