import React, { useState } from "react"
import "../../styles/App.css"

const Question = (props) => {
    const [selectedAnswer, setSelectedAnswer] = useState(null);
   

    const handleAnswerClick = (answer) => {
        setSelectedAnswer(answer);
        const correctAnswer = props.correctAnswer;
        if (answer === correctAnswer) {     
            setTimeout(() => {
                props.onCorrectAnswer(); // Вызываем функцию из родительского компонента
            }, 1000);
        } 
    };

    const getAnswerClass = (answer) => {
        if (selectedAnswer === answer) {
            return answer === props.correctAnswer ? 'selected correct' : 'selected incorrect';
        }
        return '';
    };

    return (
        <div id="question-container">
            <div id="question-block">
                <p id="question-text">{props.question}</p>
            </div>
            <ul id="choices-list">
                {props.answers.map((el) => (
                    <li key={el}>
                        <button
                            className={`choice ${getAnswerClass(el)}`}
                            onClick={() => handleAnswerClick(el)}
                        >
                            {el}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Question;
