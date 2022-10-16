import React, {useState} from "react";
import Card from "../reusable-elements/card";

const Projects = (props) => {

    const [keyLastCardFlipped, toggleKeyLastCardFlipped] = useState();

    const updateFlipCard = (value) => {
        toggleKeyLastCardFlipped(value);
    }

    return (
        <section className="projects">
            <div className="projects__wrapper">
                {props.projects.map ( (project, index) => {
                    if(project.name != "Easter egg") {
                        return (
                            <Card project={project.projName} 
                                    imgSource={project.imgSource} 
                                    key = {index}
                                    cardId = {index}
                                    keyLastCardFlipped={keyLastCardFlipped}
                                    toggleKeyLastCardFlipped={updateFlipCard}/>
                        );
                        } else {
                            return (
                                <Card project={project.projName} 
                                        imgSource={project.imgSource} 
                                        key = {index}
                                        cardId = {index}
                                        keyLastCardFlipped={keyLastCardFlipped}
                                        toggleKeyLastCardFlipped={toggleKeyLastCardFlipped}/>
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