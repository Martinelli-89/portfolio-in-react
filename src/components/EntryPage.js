import React, {useState} from 'react';
import Portfolio from './Portfolio';

const EntryPage = (props) => {

    const [seePortfolio, updateSeePortfolio] = useState(true);

    const handleClick = () => {
        updateSeePortfolio(!seePortfolio);
    }


    if(seePortfolio === false) {

        return (
            <div>
                <p>Entry page that need to be completed</p>
                <button className='accessMainPortfolio' onClick={handleClick}>Click to see portfolio</button>
            </div>
        );
    } else {
        return (
            <div>
                <Portfolio projects={props.projectsArray}/>
            </div>
        );
    }
}

export default EntryPage;