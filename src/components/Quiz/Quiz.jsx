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
            choices: ["//", "/*/", "--", " ##", "''"],
            correctAnswer: "//"
        },
        {
            question: "Как объявить константу в JavaScript?",
            choices: ["var myConst", "let myConst", "const myConst", "const myConst = 5", "const myConst := 10"],
            correctAnswer: "const myConst"
        },
        {
            question: "Какой оператор используется для проверки строгого равенства в JavaScript?",
            choices: ["==", "=", "===", "!=", "!=="],
            correctAnswer: "=="
        },
        {
            question: "Как получить длину строки в JavaScript?",
            choices: ["string.length()", "string.size()", "string.count()", "string.length", "string.size"],
            correctAnswer: "string.length"
        },
        {
            question: "Какой метод используется для добавления элемента в начало массива в JavaScript?",
            choices: ["array.addFirst()", "array.unshift()", "array.prepend()", "array.insertFirst()", "array.push()"],
            correctAnswer: "array.unshift()"
        }
    ];
    const question = () => {
        document.body.style.overflow = 'hidden';
        setShowBlur(true);

    }

    const close = () => {
        document.body.style.overflow = 'auto';
        setCurrentQuestion(0);
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
            {showBlur && <><Blur close={close} /><Question
                onCorrectAnswer={setCurrentQuestionFunc}
                question={questions[currentQuestion].question}
                answers={questions[currentQuestion].choices}
                correctAnswer={questions[currentQuestion].correctAnswer} /></>}
            <Button function={question} />

        </div>
    )
}

export default Quiz