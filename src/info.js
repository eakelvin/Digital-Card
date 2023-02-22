import React from "react";
import {MdOutlineEmail} from "react-icons/md";
import {BsLinkedin} from "react-icons/bs";

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
                <button className="butt1"><MdOutlineEmail size='1.2rem'  />Email</button>
                <button className="butt2"><BsLinkedin size='1.2rem' />LinkedIn</button>
            </div>
        </section>
    )
}