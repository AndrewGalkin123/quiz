import React, { useState } from "react"
import "../../styles/App.css"

const Question = (props) => {
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [result, setResult] = useState('');
    let resultStyle = {
        backgroundColor: result === 'Правильный ответ!' ? 'green' : result === 'Неправильный ответ. Попробуйте еще раз.' ? 'red' : 'rgb(181, 81, 151)'
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
        }
    };



    return (
        <div id="question-container" style={resultStyle}>
            <p id="question-text">{props.question}</p>
            <ul id="choices-list">
                {props.answers.map(el => <li><button className={`choice ${selectedAnswer === el ? 'selected' : ''}`} onClick={() => handleAnswerClick(el)}>{el}</button></li>)}
            </ul>
            <div id="result-container">{result}</div>
        </div>
    );
};

export default Question;
