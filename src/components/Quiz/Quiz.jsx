import React from "react";
import Button from "../common/button/Button";

const Quiz = (props) => {
    return(
        <div className="quiz">
            <div className="quiz-info">
                <p>{props.title}</p>
                <p>{props.info}</p>
            </div>
            <Button/>
        </div>
    )
}

export default Quiz