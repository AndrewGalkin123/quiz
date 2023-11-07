import React, { useState } from "react";
import Button from "../common/button/Button";
import Blur from "../Blur/Blur.jsx"
import "../../styles/App.css"
import Question from "../Question/Question.jsx";
import questionSets from "./questions";

const Quiz = (props) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showBlur, setShowBlur] = useState(false);
    const questionArray = questionSets[props.title];

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
        if (nextQuestion < questionArray.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            // All questions have been answered, perform quiz completion actions
            close();
        }
    }

    return (
        <div className="quiz">
            <div className="quiz-info-block">
                <div className="quiz-title-block"><p className="quiz-title">{props.title}</p></div>
                <p className="quiz-info">{props.info}</p>
            </div>
            {showBlur && (
                <>
                    <Blur close={close} />
                    <Question
                        onCorrectAnswer={setCurrentQuestionFunc}
                        question={questionArray[currentQuestion].question}
                        answers={questionArray[currentQuestion].choices}
                        correctAnswer={questionArray[currentQuestion].correctAnswer}
                    />
                </>
            )}
            <Button function={question} />
        </div>
    );
}

export default Quiz;