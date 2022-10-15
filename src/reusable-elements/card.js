import { getDefaultNormalizer } from "@testing-library/react";
import React, {useState} from "react";


const Card = (props) => {

  const [flip, toggleFlip] = useState(false);


  return (
    <div className="projectCard">
      <button
          className={flip ? 'card is-flipped' : 'card'}
          onClick={() => toggleFlip(!flip)}
        >
        <div className="card__face card__face--front">
        </div>
        <div  className="card__face card__face--back">
        <img src={require(`../Resources/Images/${props.imgSource}`)}></img>
        {props.project ? <p>{props.project}</p> : ""}
        </div>
        </button>
    </div>
    )
}

export default Card;