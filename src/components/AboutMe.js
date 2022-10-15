import React, {useState} from "react";

const AboutMe = () => {

    const [showDescription, updateShowDescription] = useState(true);

    if (showDescription == true) {
        return (
            <div className="aboutMe">
                <h3 className="aboutMe__name">const Martinelli_Alex <span className="punctuation">=</span> &#123;</h3>
                <br></br>
                <p className="aboutMe__description">
                    <span className="key">location</span><span className="punctuation">: "</span><span className="value">Bristol</span><span className="punctuation">",</span>
                    <br></br>
                    <span className="key">info</span><span className="punctuation">: "</span><span className="value">
                    A junior software developer which, after many years spent in hospitality, wants a new career challange that could enjoy. I love coding: you are always learning something new and solving logical problems. After few months teaching myself on Codecademy I joined the _nology consultancy programme. I hope to find an employer that will give me a chance to prove my skills and to improve my coding knowledge.</span><span className="punctuation">",</span>
                    <br></br>
                    <span className="key">skills</span><span className="punctuation">: ["</span><span className="value">React</span><span className="punctuation">","</span><span className="value">JS</span><span className="punctuation">","</span><span className="value">SASS & CSS</span><span className="punctuation">","</span><span className="value">Java</span><span className="punctuation">","</span><span className="value">Spring Boot</span><span className="punctuation">","</span><span className="value">HTML 5</span><span className="punctuation">","</span><span className="value">Git</span><span className="punctuation">"];</span>
                </p>
                <h3 className="aboutMe__name">&#125;</h3>   
            </div>
        );
    }
    
}

export default AboutMe;