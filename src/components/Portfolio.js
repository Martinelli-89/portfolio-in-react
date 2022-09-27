import React, {useState} from "react";
import AboutMe from "./AboutMe";

const Portfolio = () => {

    //Declaring useState variables
    const [aboutMe, updateAboutMe] = useState(false);
    const [projects, updateProjects] = useState(false);
    const [getInTouch, updateGetInTouch] = useState(false);

    if (aboutMe===false && projects===false && getInTouch===false) {

        return (

        <main className="portfolio">
            <nav>Nav goes here</nav>
            <section className="container">
                <div className="ball"></div>
                <div className="container__title1 singleLetter">S</div>
                <div className="container__title2 singleLetter">O</div>
                <div className="container__title3 singleLetter">F</div>
                <div className="container__title4 singleLetter">T</div>
                <div className="container__title5 singleLetter">W</div>
                <div className="container__title6 singleLetter">A</div>
                <div className="container__title7 singleLetter">R</div>
                <div className="container__title8 singleLetter">E</div>
                <div className="container__title9 singleLetter">D</div>
                <div className="container__title10 singleLetter">E</div>
                <div className="container__title11 singleLetter">V</div>
                <div className="container__title12 singleLetter">E</div>
                <div className="container__title13 singleLetter">L</div>
                <div className="container__title14 singleLetter">O</div>
                <div className="container__title15 singleLetter">P</div>
                <div className="container__title16 singleLetter">E</div>
                <div className="container__title17 singleLetter">R</div>
                <div className="container__projects card">Projects</div>
                <div className="container__aboutMe card">About me</div>
                <div className="container__something card">Something</div>
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