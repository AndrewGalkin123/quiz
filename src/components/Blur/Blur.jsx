import React from "react"
import "../../styles/App.css"

const Blur = (props) => {
    return (
        <div onClick={props.close} className="bg-blur"></div>
    )
}

export default Blur