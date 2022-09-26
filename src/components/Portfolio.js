import React, {useState} from "react";
import AboutMe from "./AboutMe";

const Portfolio = () => {

    //Declaring useState variables
    const [aboutMe, updateAboutMe] = useState(false);
    const [projects, updateProjects] = useState(false);
    const [getInTouch, updateGetInTouch] = useState(false);

    const handleClickAboutMe = () => {
        updateAboutMe(!aboutMe);
    }


    if (aboutMe===false && projects===false && getInTouch===false) {

        return (

        <main class="intro">
            <section onClick={handleClickAboutMe} class="intro__about-me intro__line">
                <p>
                    <span class="intro__about-me--letter1">A</span><span class="intro__about-me--letter2">b</span><span class="intro__about-me--letter3">o</span><span class="intro__about-me--letter4">u</span><span class="intro__about-me--letter5">t </span>
                    &nbsp;
                    <span class="intro__about-me--letter6">m</span><span class="intro__about-me--letter7">e</span>
                </p>
            </section>
            <section class="intro__projects intro__line">
            <p>
                    <span class="intro__projects--letter4">P</span><span class="intro__projects--letter3">r</span><span class="intro__projects--letter2">o</span><span class="intro__projects--letter1">j</span><span class="intro__projects--letter1">e </span><span class="intro__projects--letter2">c</span><span class="intro__projects--letter3">t</span><span class="intro__projects--letter4">s</span>
                </p>
            </section>
            <section class="intro__get-in-touch intro__line">
                <p>
                    <span class="intro__get-in-touch--letter10">G</span><span class="intro__get-in-touch--letter9">e</span><span class="intro__get-in-touch--letter8">t</span>&nbsp;<span class="intro__get-in-touch--letter7">i</span><span class="intro__get-in-touch--letter6">n </span>
                    &nbsp;
                    <span class="intro__get-in-touch--letter5">t</span><span class="intro__get-in-touch--letter4">o</span><span class="intro__get-in-touch--letter3">u</span><span class="intro__get-in-touch--letter2">c</span><span class="intro__get-in-touch--letter1">h</span>
                </p>
            </section>
        </main>

        );
    } else if (aboutMe === true) {

        return (
            <div>
               <AboutMe />
            </div>

        );

    }

}

export default Portfolio;