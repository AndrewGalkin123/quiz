import React from "react";
import Button from "../common/button/Button";
import "../../styles/App.css"

const Quiz = (props) => {
    return(
        <div className="quiz">
            <div className="quiz-info-block">
                <div className="quiz-title-block"><p className="quiz-title">{props.title}</p></div>
               
                <p className="quiz-info">{props.info}</p>
            </div>
            <Button/>
        </div>
    )
}

export default Quiz