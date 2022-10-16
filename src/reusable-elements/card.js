import { getDefaultNormalizer } from "@testing-library/react";
import React, {useState, useEffect} from "react";


const Card = (props) => {

  const [flip, toggleFlip] = useState(false);

  useEffect(() => {

    if(props.keyLastCardFlipped != props.cardId) {
      toggleFlip(false);
    }

  }, [props.keyLastCardFlipped]);

  const handleFlip = () => {

   if(props.keyLastCardFlipped == undefined) {
      toggleFlip(!flip);
      props.toggleKeyLastCardFlipped(props.cardId);
   } else if(props.keyLastCardFlipped == props.cardId) {
        toggleFlip(!flip);
        props.toggleKeyLastCardFlipped(undefined);
   } else {
        toggleFlip(!flip);
        props.toggleKeyLastCardFlipped(props.cardId);
   }

  }

  return (
    <div className="projectCard">
      <button
          className={flip ? 'card is-flipped' : 'card'}
          onClick={() => handleFlip()}
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