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
            if (answer === props.correctAnswer) {
                return 'correct';
            } else {
                return 'incorrect';
            }
        }
        return '';
    };

    const currentQuestion = props.currentQuestion;
    const questionArray = props.questionArray;


    return (
        <div id="question-container">
            <div id="question-block">
                <p id="question-text">{props.question}</p>
            </div>
            <ul>
                {props.answers.map((el, index) => (
                    <li key={index}>
                        <div className={getAnswerClass(el)} onClick={() => handleAnswerClick(el)}>
                            <div className="choice"></div>
                            <span className="choice-text">{el}</span>
                        </div>
                    </li>
                ))}
            </ul>

            {/* <div style={{display: "flex", flexDirection: "column", alignItems: "flex-end", justifyContent: "space-between"}}>
                    <div className="question-header">
                        <p> {currentQuestion + 1}/{questionArray.length}</p>
                    </div>
                    <div className="question-navigation">
                        {currentQuestion > 0 && (
                            <button className="prev" onClick={props.goToPrevQuestion}>&#8592;</button>
                        )}
                        {currentQuestion < questionArray.length - 1 && (
                            <button className="next" onClick={props.goToNextQuestion}>&#8594;</button>
                        )}
                    </div>
                </div> */}


        </div>
    );
};

export default Question