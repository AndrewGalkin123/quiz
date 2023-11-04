import React, { useState } from "react"
import "../../styles/App.css"

const Question = (props) => {
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [result, setResult] = useState('');


    let resultStyle = {
        backgroundColor: result === 'Правильный ответ!' ? 'rgb(21, 115, 14)' : result === 'Неправильный ответ. Попробуйте еще раз.' ? 'rgb(161, 24, 42)' : 'rgb(181, 81, 151)'
    };

    const handleAnswerClick = (answer) => {
        setSelectedAnswer(answer);
        const correctAnswer = props.correctAnswer;
        if (answer === correctAnswer) {
            setResult('Правильный ответ!');
            setTimeout(() => {
                props.onCorrectAnswer(); // Вызываем функцию из родительского компонента
                setResult('')
            }, 1000);
        } else {
            setResult('Неправильный ответ. Попробуйте еще раз.');
            setTimeout(() => {
                setResult('');
            }, 1000);
        }
    };



    return (
        <div id="question-container">
            <div id="question-text">{props.question}</div>
            <ul id="choices-list">
                {props.answers.map(el => <li><button className={`choice ${selectedAnswer === el ? 'selected' : ''}`} onClick={() => handleAnswerClick(el)}>{el}</button></li>)}
            </ul>
            <div id="result-container" style={resultStyle}>{result}</div>
        </div>
    );
};

export default Question;
