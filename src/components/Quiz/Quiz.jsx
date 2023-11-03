import React, { useState } from "react";
import Button from "../common/button/Button";
import Blur from "../Blur/Blur.jsx"
import "../../styles/App.css"
import Question from "../Question/Question.jsx";

const Quiz = (props) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showBlur, setShowBlur] = useState(false);
    const questions = [
        {
            question: "Какой символ используется для комментирования однострочного комментария в JavaScript?",
            choices: ["//","/*/","--"," ##","''"],
            correctAnswer: "//"
        }, {
            question: "Сколько планет в солнеч3213ной системе?",
            choices: ["8", 9, "10"],
            correctAnswer: 9
        }
    ];
    const question = () => {
        document.body.style.overflow = 'hidden';
        setShowBlur(true);

    }

    const close = () => {
        document.body.style.overflow = 'auto';
        setShowBlur(false);
    }
    const setCurrentQuestionFunc = () => {
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            // Все вопросы закончились, выполните действия по завершению викторины
            close();
        }
    }
    
    return (
        <div className="quiz">
            <div className="quiz-info-block">
                <div className="quiz-title-block"><p className="quiz-title">{props.title}</p></div>
                <p className="quiz-info">{props.info}</p>
            </div>
            {showBlur && <><Blur /><Question
                onCorrectAnswer={setCurrentQuestionFunc}
                question={questions[currentQuestion].question}
                answers={questions[currentQuestion].choices}
                correctAnswer={questions[currentQuestion].correctAnswer} /></>}
            <Button function={question} />

        </div>
    )
}

export default Quiz