import React from 'react';
import FrontPage from './frontPage';
import AboutMe from './aboutMe';
import NavBar from '../components/navbar';
import Projetos from './projects';

function HomePage() {
    return(
        <div>
            <NavBar />
            <FrontPage />
            <AboutMe />
            <Projetos />
        </div>
    )
  }
  
  export default HomePage