import { useEffect, useRef } from 'react'
import "./intro.scss"
import { init } from 'ityped'

const Intro = () => {
    const textRef = useRef();
    useEffect(() => {
        //console.log(textRef)
        init(textRef.current, { 
            showCursor: true,
            backDelay: 1500,
            backSpeed: 60,
            strings: ['Web Developer', 'Web Designer', 'Full Stack Developer'] 
        }) 
    }, [])

    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/cllfoto1.png" alt=""/>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Celil Tat</h1>
                    <h3>
                     <span ref={textRef}></span>
                    </h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/down1.png" alt="" />
                </a>
            </div>
        </div>
    )
}

export default Intro
