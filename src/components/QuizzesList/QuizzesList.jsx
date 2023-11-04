import React,{useState} from "react"
import "../../styles/App.css"
import Quiz from "../Quiz/Quiz"

const QuizzesList = () => {
   
    const quizzes = [
    { title: "Javascript", info: "By taking this quiz, you can see how well you understand the basics of JavaScript, as well as learn interesting facts about the programming language that powers web pages. Regardless of your level of knowledge, the quiz will give you the opportunity to improve your JavaScript skills." },
    { title: "C++", info: "By taking this quiz, you can see how well you understand basic C++ concepts, data structures, classes, pointers, and other important elements of the language. Regardless of your level of knowledge, the quiz will provide you with the opportunity to improve your C++ skills and deepen your understanding of the language." },
    { title: "Python", info: "This quiz invites you into the world of one of the most popular and convenient programming languages. .By taking this quiz you will learn interesting facts about Python, its syntax, libraries and features. Are you ready for the challenge? Let's start the quiz and see how well you know about the world of Python!" },
    { title: "C#", info: "Welcome to the C# quiz! This quiz takes you into the exciting world of C#, a programming language created by Microsoft. C# is widely used in desktop application development, web development and gaming industry. Are you ready for the challenge? Let's start the quiz and see how well you know C#!" },
    { title: "React", info: "Welcome to the React Quiz! Dive into the world of creating modern, interactive web applications with this popular JavaScript library. Are you ready for the challenge? Let's get started and deepen your knowledge of React!" },
    { title: "Java", info: "Welcome to the Java Quiz! Java is one of the most common and popular programming languages ​​in the world. This quiz takes you into the exciting world of Java, where you can test and expand your knowledge of programming, object-oriented development, and building cross-platform applications." },
    { title: "PHP", info: "Get ready for an exciting quiz that will test your knowledge of PHP, one of the most popular programming languages ​​for web development. This quiz will give you the opportunity to try your hand at different aspects of PHP, from basic concepts to more advanced topics." },
    { title: "Ruby", info: "Prepare for an exhilarating adventure in the world of Ruby! In this quiz you will reveal the secrets of one of the most elegant and powerful programming languages. Open the Ruby mystery box to see how well you know the language.You will encounter puzzles where you will need to use your knowledge of Ruby to find the correct answers" },
    { title: "Swift", info: "Welcome to the world of `Swift Mastery`! This quiz is designed to be your key to mastering Swift programming. If you are ready to crack the code, then this game is for you. You will encounter riddles, puzzles and questions that require knowledge and understanding of Swift. Pass them and you will be on your way to becoming a Swift Master." }
    ]
    
    return (
        <main>
            {quizzes.map(el => <Quiz title={el.title} info={el.info} />)}  
            {/* через пропсы передать обозначитель в Quiz и там обработать */}
        </main>
    )
}

export default QuizzesList