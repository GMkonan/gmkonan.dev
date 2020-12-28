import websiteImage from "./../images/website.png";
import blog from "./../images/blog.png";
import anime from "./../images/anime.jpg";
import githubImage from "./../images/github.png";

const projects = [
    {
        title: "Portfolio Website",
        image: websiteImage,
        titleCard: "Portfolio Website",
        text: "A website I made as my portfolio with React, NextJS and Material UI",
        url: "https://github.com/GMkonan/portfolio",
        url2: "https://guilhermemonteiro.dev",
        buttonText2:"Website",
        tech: "React, Material UI, NextJS"
    },
    {
        title: "Blog Website",
        image: blog,
        titleCard: "Blog Website",
        text: "A website I made So I can post my articles using NextJS and styled-components",
        url: "https://github.com/GMkonan/MyBlog",
        url2: "https://my-blog-vert.vercel.app/",
        buttonText2:"Website",
        tech: "React, styledComponents, NextJS"
    },
    {
        title: "Github Automation",
        image: githubImage,
        titleCard: "Github Automation",
        text: "A Script I made using python to automate the process of starting a project",
        url: "https://github.com/GMkonan/githubAutomation",
        tech: "Python, Bash"
    },
    {
        title: "Anime Scraper",
        image: anime,
        titleCard: "Anime Scraper",
        text: "A script I made with python to download animes faster",
        url: "https://github.com/GMkonan/anime_scraper",
        tech: "Python"
    },
    
]

export default projects;