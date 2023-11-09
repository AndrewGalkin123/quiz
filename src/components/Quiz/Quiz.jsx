import React, { useState } from "react";
import Button from "../common/button/Button";
import "../../styles/App.css";
import Question from "../Question/Question.jsx";
import questionSets from "./questions";
import Header from "../common/Header/Header.jsx";

const Quiz = (props) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [isQuestionVisible, setIsQuestionVisible] = useState(false);

    const questionArray = questionSets[props.title];

    const openQuestion = () => {
        document.body.style.overflow = 'hidden';
        setIsQuestionVisible(true);
    }

    const closeQuestion = () => {
        document.body.style.overflow = 'auto';
        setIsQuestionVisible(false);
        setCurrentQuestion(0);
    }

    const setCurrentQuestionFunc = () => {
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questionArray.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            // All questions have been answered, perform quiz completion actions
            closeQuestion();
        }
    }

    return (
        <div className="quiz">

            {!isQuestionVisible && (
                <><div className="quiz-info-block">
                    <div className="quiz-title-block"><p className="quiz-title">{props.title}</p></div>
                    <p className="quiz-info">{props.info}</p>

                </div>
                    <Button function={openQuestion} />
                </>
            )}

            {isQuestionVisible && (
                <div className="question-overlay">
                    <Header /> {/* Include Header in the Question overlay */}
                    <Question
                        onCorrectAnswer={setCurrentQuestionFunc}
                        question={questionArray[currentQuestion].question}
                        answers={questionArray[currentQuestion].choices}
                        correctAnswer={questionArray[currentQuestion].correctAnswer}
                    />
                </div>
            )}
        </div>
    );
}

export default Quiz;
