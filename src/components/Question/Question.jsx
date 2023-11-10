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
    const goToPrevQuestion = props.goToPrevQuestion;
    const goToNextQuestion = props.goToNextQuestion;
    const questionArray = props.questionArray;

    const shapes = ['circle', 'triangle', 'square', 'rhombus', 'star'];

    return (
        <div id="question-container">
            <div id="question-block">
                <p id="question-text">{props.question}</p>
            </div>
            <div >
                <ul id="choices-list">
                    {props.answers.map((el, index) => (
                        <li key={index}>
                            <div onClick={() => handleAnswerClick(el)} className={`choice-container ${getAnswerClass(el)}`}>
                                <button
                                    className={`choice ${shapes[index]} ${getAnswerClass(el)}`}
                                ></button>
                                <span className="choice-text">{el}</span>
                            </div>
                        </li>
                    ))}
                </ul>
                <div className="question-navigation">
                    {currentQuestion > 0 && (
                        <button className="prev" onClick={goToPrevQuestion}>Prev</button>
                    )}
                    {currentQuestion < questionArray.length - 1 && (
                        <button className="next" onClick={goToNextQuestion}>Next</button>
                    )}
                </div>
            </div>
        </div>
    );

};

export default Question;
