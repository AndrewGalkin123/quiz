import React from "react"
import Header from "../../components/common/Header/Header"
import QuizzesList from "../../components/QuizzesList/QuizzesList"
import Footer from "../../components/common/Footer/Footer"

const MainPage = () => {
    return(
        <div>
             <Header/>
             <QuizzesList/>
             <Footer/>
        </div>
    )
}

export default MainPage