import React from "react"
import "../../styles/App.css"
import Quiz from "../Quiz/Quiz"

const QuizzesList = () => {
    const quizzes = [
    { title: "Javascript", info: "Javascript test" },
    { title: "Javascript", info: "Javascript test" },
    { title: "Javascript", info: "Javascript test" },
    { title: "Javascript", info: "Javascript test" }
    ]
    return (
        <main>
            {quizzes.map(el => <Quiz title={el.title} info={el.info} />)}
        </main>
    )
}

export default QuizzesList