import React from 'react';
import FrontPage from './frontPage';
import AboutMe from './aboutMe';
import NavBar from '../components/navbar';
import Projetos from './projects';
import Contact from './contact';
function HomePage() {
    return(
        
        <div>
            <NavBar />
            <FrontPage />
            <AboutMe />
            <Projetos />
            <Contact />
        </div>
        
    )
  }
  
  export default HomePage