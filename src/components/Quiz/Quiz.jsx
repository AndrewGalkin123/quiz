import React from "react";
import Button from "../common/button/Button";

const Quiz = (props) => {
    return(
        <div className="quiz">
            <div className="quiz-info">
                <p className="quiz-title">{props.title}</p>
                <p className="quiz-info">{props.info}</p>
            </div>
            <Button/>
        </div>
    )
}

export default Quiz