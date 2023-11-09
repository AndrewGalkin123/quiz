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
    const shapes = ['circle', 'triangle', 'square', 'rhombus', 'star'];

    return (
        <div id="question-container">
            <div id="question-block">
                <p id="question-text">{props.question}</p>
            </div>
            <ul id="choices-list">
                {props.answers.map((el, index) => (
                    <li key={index}>
                        <div className="choice-container">
                            <button
                                className={`choice ${shapes[index]} ${getAnswerClass(el)}`}
                                onClick={() => handleAnswerClick(el)}
                            ></button>
                            <span className="choice-text">{el}</span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );

};

export default Question;
