import React from "react"
import "../../styles/App.css"

const Question = (props) => {
    return (
        <div id="question-container">
            <p id="question-text">{props.question}</p>
            <ul id="choices-list">
                <li><button class="choice">{props.answer1}</button></li>
                <li><button class="choice">{props.answer2}</button></li>
                <li><button class="choice">{props.answer3}</button></li>
            </ul>
            <div id="result-container"></div>
        </div>
    )
}

export default Question