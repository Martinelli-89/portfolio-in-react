import { getDefaultNormalizer } from "@testing-library/react";
import React, {useState} from "react";


const Card = (props) => {

  const [front, turnFront] = useState(true);
  const [ticTacToe, toggleTicTacToe] = useState(false);

  const flipCard = () => {
    turnFront(!front);
  }

  const startEndGame = () => {
    toggleTicTacToe(!ticTacToe);
  }

  const handleClickFront = event => {
    flipCard();
  }


  if (front == true &&  ticTacToe == false) {

    return (
      <div className="card" onClick={handleClickFront}>
      </div>
      
    )

  } else if(front == true &&  ticTacToe == true) {

    return (
      <div className="card">
        X
      </div>
      
    )

  } else {

    return (
      <div className="cardBack">
          <img src={require(`../Resources/Images/${props.imgSource}`)}></img>
          <p>{props.project}</p>
      </div>
      
    )
  }
}

export default Card;