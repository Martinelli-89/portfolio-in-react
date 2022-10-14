import React, {useState} from "react";
import Card from "../reusable-elements/card";

const projectsInfo = [{
    projName: "HTML & CSS portfolio",
    link: "https://martinelli-89.github.io/My-Portfolio/",
    description: "The first projects on the _nology course",
    code: ["HTML", "BEM", "CSS", "SASS"]},
    {projName: "Calculator",
    link: "https://martinelli-89.github.io/calculator/",
    description: "Our first javascript challange",
    code: ["HTML", "CSS", "SASS", "JAVASCRIPT"]},
    {projName: "Chess",
    link: "https://martinelli-89.github.io/ChessJS/",
    description: "My first game :)",
    code: ["HTML", "CSS", "SASS", "JAVASCRIPT"]},
    {projName: "Morse translator",
    link: "",
    description: "A challanging tech test",
    code: ["HTML", "CSS", "SASS", "JAVASCRIPT"]},
    {projName: "",
    link: "",
    description: "",
    code: ["", "", "S", ""]},
    {projName: "",
    link: "",
    description: "",
    code: ["", "", "S", ""]},
    {projName: "",
    link: "",
    description: "",
    code: ["", "", "S", ""]},
    {projName: "",
    link: "",
    description: "",
    code: ["", "", "S", ""]},
    {projName: "",
    link: "",
    description: "",
    code: ["", "", "S", ""]},

]

const Projects = () => {

    return (
        <section className="projects">
            <div className="projects__wrapper">
                {projectsInfo.map ( (project, index) => {
                    return (
                        <Card project={project.projName} 
                                    link={project.link} 
                                    description={project.description} 
                                    code={project.code} 
                                    index = {index}/>
                    );
                })
                }
            </div>
            <h2 className="projects__title">PROJECTS</h2>
        </section>
    );
}

export default Projects;