import React from 'react';
import FrontPage from './frontPage';
import AboutMe from './aboutMe';
import NavBar from '../components/navbar';
import Projetos from './projects';
import Contact from './contact';
import {Box} from '@material-ui/core';

function HomePage() {
    return(
        
        <Box style={{ overflow: "hidden" }}>
            <NavBar />
            <FrontPage />
            <AboutMe />
            <Projetos />
            <Contact />
        </Box>
        
    )
  }
  
  export default HomePage