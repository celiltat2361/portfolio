import React from 'react'
import "./topbar.scss"
import {Person, Mail} from "@material-ui/icons"

const Topbar = ({menuOpen, setMenuOpen}) => {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
           <div className="wrapper">
            <div className="left">
                <a href="#intro" className="logo">CllTt.</a>
                <div className="itemContainer">
                    <Person className="icon" />
                    <span>+46 73 730 0279</span>
                </div>
                <div className="itemContainer">
                    <Mail className="icon" />
                    <span>23celiltat61@gmail.com</span>
                </div>
            </div>
            
            <div className="right">
                <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                    <span className="line1"></span>
                    <span className="line2"></span>
                    <span className="line3"></span>
                </div>
            </div> 
           </div>
        </div>
    )
}

export default Topbar
