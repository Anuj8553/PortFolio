// import React, { useEffect } from 'react'
// // import AOS from "aos";
// // import "aos/dist/aos.css";
// import Project from './Project/Project'
// import './Project/Project.css'
// import './Projects.css'
// import GithubProject from './GithubProject/GithubProject';
// import './GithubProject/GithubProject.css'
// import projects from '../../projects.json'
// import { Link } from 'react-router-dom';

// const Projects = () => {
//     // useEffect(() => {
//     // AOS.init();
//     // AOS.refresh();
//     // }, []);
//     return (
//         <div id='projects' className="projects">
//             {/* <div className="projectsgradient1"></div> */}
//             {/* <div className="projectsgradient2"></div> */}
//             <div className="projects__title heading">//Projects</div>
//             <div className="projects__desc">I've developed a lot of personal side projects some, my favourites are as below:</div>
//             <div className="projects__work">
//                 {
//                     projects.map(project => <Project tools={project.tools} name={project.name} desc={project.desc} github={`https://github.com/anuj8553/${project.github}`} img={`./${project.img}`} href={project.href} ></Project>)
//                 }
//             </div>
//             <div className="githubProjects__title">Other projects you may find intersting!</div>
//             <div className="github"   >
//                 <GithubProject name={'RandomJS'} desc={'Generating randomly is a real pain in JavaScript. The literals and syntax is way too long, randomjs is here to save the day by providing a library that lets you randomize stuff with one simple method call!'} github={'https://github.com/tanishqkrk/randomjs'}></GithubProject>
//                 <GithubProject name={'Decimal Separator'} desc={'This python script gives you the integer before the decimal and after the decimal as a whole number.'} github={'https://github.com/tanishqkrk/Decimal-separator'}></GithubProject>
//             </div>
//             <div className="moreProjects">
//                 {/* <Link to="/projects">Explore more</Link> */}
//             </div>
//         </div>
//     )
// }

// export default Projects 


// //NAYA
import React from 'react';
import Project from './Project/Project';
import './Project/Project.css';
import './Projects.css';
import GithubProject from './GithubProject/GithubProject';
import './GithubProject/GithubProject.css';
import projects from '../../projects.json';

const Projects = () => {
    return (
        <div id='projects' className="projects">
            <div className="projects__title heading">//Projects</div>
            <div className="projects__desc">
                I've developed a lot of personal side projects, my favorites are below:
            </div>
            <div className="projects__work">
                {
                    projects.map((project, index) => (
                        <Project 
                            key={project.id || index}  // Unique key added to prevent warnings
                            tools={project.tools} 
                            name={project.name} 
                            desc={project.desc} 
                            github={`https://github.com/Anuj8553/${project.github}`} 
                            img={`./${project.img}`} 
                            href={project.href} 
                        />
                    ))
                }
            </div>
            <div className="githubProjects__title">
                Other projects you may find interesting!
            </div>
            <div className="github">
                <GithubProject 
                    name={'Brain Tumor Detection'} 
                    desc={"Let's learn about the friendship between the brain and AI/ML! !"} 
                    github={'https://colab.research.google.com/drive/1_qHlTRbVhnzDwH4tP0smwrhmxmXJ_tMw?usp=sharing'} 
                />
                <GithubProject 
                    name={'Offensive Language detection'} 
                    desc={'Offensive Speech Buster: All-in-One Python Toolkit.'} 
                    github={'https://colab.research.google.com/drive/1FkXnfwAkGIdifYtAxPBmBn9FVOYUXL5e?usp=sharing'} 
                />
            </div>
        </div>
    );
};
console.log("Projects Data: in Projects.jsx", projects);
export default Projects;
