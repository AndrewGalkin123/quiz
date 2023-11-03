import React from "react"
import "../../styles/App.css"
import Quiz from "../Quiz/Quiz"

const QuizzesList = () => {

    const quizzes = [
    { title: "Javascript", info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos obcaecati cupiditate sunt, sapiente animi qui. Corporis sapiente odio doloremque tempore ea soluta sunt voluptatibus alias. Exercitationem voluptatum reprehenderit cum eius." },
    { title: "C++", info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos obcaecati cupiditate sunt, sapiente animi qui. Corporis sapiente odio doloremque tempore ea soluta sunt voluptatibus alias. Exercitationem voluptatum reprehenderit cum eius." },
    { title: "C#", info: "Javascript test" },
    { title: "Math", info: "Javascript test" },
    { title: "Javascript", info: "Javascript test" },
    { title: "Javascript", info: "Javascript test" },
    { title: "Javascript", info: "Javascript test" },
    { title: "Javascript", info: "Javascript test" },
    { title: "Javascript", info: "Javascript test" }
    ]
    return (
        <main>
            {quizzes.map(el => <Quiz title={el.title} info={el.info} />)}  
            {/* через пропсы передать обозначитель в Quiz и там обработать */}
        </main>
    )
}

export default QuizzesList