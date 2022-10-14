import React, {useState} from "react";

const AboutMe = () => {

    const [showDescription, updateShowDescription] = useState(true);

    if (showDescription == true) {
        return (
            <div className="aboutMe">
                <h3 className="aboutMe__name">Martinelli Alex</h3>
                <br></br>
                <p className="aboutMe__description">
                    I'm Alex, a junior softaware developer based in Bristol. After many years spent in hospitality I wanted a new career challange that I could enjoy. I love coding: you are always learning something new and solving logical problems. After few months teaching myself on Codecademy I joined the _nology consultancy programme. I hope to find someone that will give me a chance to prove my skills and to improve my coding knowledge.
                </p>
            </div>
        );
    }
    
}

export default AboutMe;