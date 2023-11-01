import React from "react"
import "../../../styles/App.css"

const Header = () => { 
    return(
        <header className="header">
            <a href="/" style={{textDecoration: "none"}}><p style={{color: "white"}}>QUIZ</p></a>  
            <a href="/" style={{textDecoration: "none"}}><p style={{color: "white"}}>ABOUT US</p></a>  
        </header>
    )
}

export default Header