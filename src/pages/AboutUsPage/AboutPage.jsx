import React from "react";
import Header from "../../components/common/Header/Header";
import Footer from "../../components/common/Footer/Footer";
import mainLogo from "./panda.png"

const AboutPage = () => {
    return (
        <div>
            <Header />
            <div id="about-me-block">
                <img id="main-logo" alt="logo" src={mainLogo} />
                <p className="greetings">Hi, I am Andrew!</p>
                <p className="job-title">Frontend developer</p>

                <p className="info-about-me">
                    When I was just 13 years old, I stumbled into the world of information technology by accident. It all
                    started when I completed online courses at the SHAG Academy. These initial steps into the realm of
                    programming ignited my curiosity and passion for the IT industry.

                    But, as life often does, it threw its surprises, and I had a brief hiatus in my learning. However, after
                    a year, I returned with renewed vigor and determination. This break allowed me to reflect on my
                    interests and the direction I wanted to take in IT.

                    My true journey began when I joined Java programming courses at Hillel. It was like discovering a new
                    universe. Java became my second language, and I delved into the world of object-oriented programming.

                    However, the programming world is vast, and I always aimed to learn something new. One fine day, I
                    stumbled upon JavaScript, a language that, as it turned out, was the key to front-end development. I
                    started with web design, mastering HTML and CSS. My path then led me to JavaScript, where I delved deep
                    into the language and its capabilities.

                    I completed numerous online courses and marathons to learn how to create interactive web pages and web
                    applications. Courses from itproger became a valuable source of knowledge for me.

                    The next step was to study frameworks and libraries for web application development. I delved into
                    Node.js, Express.js, and React.js. After completing the relevant courses and projects, I felt ready to
                    create my own web application.

                    And, of course, I didn't forget about my intellectual growth as a programmer. I regularly solved
                    problems on LeetCode, which helped me improve my skills in both mechanical and algorithmic programming.

                    My journey to becoming a Frontend Developer was long and exciting. I learned that programming is not
                    just a skill but also a passion that allows me to create and tackle interesting challenges. With each
                    step, I felt that my IT career was becoming more fascinating and promising. And this is just the
                    beginning of my journey.
                </p>
            </div>

            <Footer />
        </div>
    )
}

export default AboutPage