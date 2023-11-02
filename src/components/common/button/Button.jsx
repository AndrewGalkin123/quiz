import React from "react";

const Button = (props) => { 
    
    return(
        <button onClick={props.function} className="quiz-button">Enter the quiz</button>
    )
}

export default Button