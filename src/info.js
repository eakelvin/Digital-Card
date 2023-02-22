import React from "react";
import {MdOutlineEmail} from "react-icons/fa";
import {BsLinkedin} from "react-icons/fa";

export default function Info() {
    return (
        <section>
            <img className="pic" src="./images/ea1.jpg" />
            <div className="text">
                <h1>Kelvin Akaba</h1>
                <h3 className="role">Front-End Developer</h3>
                <a href="#" className="web">Check out my Website</a>
            </div>
            <div className="butt">
                <button><MdOutlineEmail />Email</button>
                <button><BsLinkedin />LinkedIn</button>
            </div>
        </section>
    )
}