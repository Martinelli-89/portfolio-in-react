import React, {useState} from "react";
import Card from "../reusable-elements/card";

const Projects = (props) => {

    return (
        <section className="projects">
            <div className="projects__wrapper">
                {props.projects.map ( (project, index) => {
                    if(project.name != "Easter egg") {
                        return (
                            <Card project={project.projName} 
                                    imgSource={project.imgSource} 
                                    key = {index}/>
                        );
                        } else {
                            return (
                                <Card project={project.projName} 
                                        imgSource={project.imgSource} 
                                        key = {index}/>
                            );
                        }
                })
                }
            </div>
            <h2 className="projects__title">PROJECTS</h2>
        </section>
    );
}

export default Projects;