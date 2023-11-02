import React, { useState } from "react";
import Button from "../common/button/Button";
import Blur from "../Blur/Blur.jsx"
import "../../styles/App.css"

const Quiz = (props) => {
    const [showBlur, setShowBlur] = useState(false);

    const question = () => {
        document.body.style.overflow = 'hidden';
        setShowBlur(true);
    }

    const close = () => {
        document.body.style.overflow = 'auto';
        setShowBlur(false);
    }
    return (
        <div className="quiz">
            <div className="quiz-info-block">
                <div className="quiz-title-block"><p className="quiz-title">{props.title}</p></div>
                <p className="quiz-info">{props.info}</p>
            </div>
            {showBlur && <Blur/>}
            <Button function={question} />
            
        </div>
    )
}

export default Quiz