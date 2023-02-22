import React from "react";
import {FaTwitterSquare} from "react-icons/fa";
import {FaFacebookSquare} from "react-icons/fa";
import {FaInstagramSquare} from "react-icons/fa";
import {FaGithubSquare} from "react-icons/fa";



export default function Footer() {
    return (
        <footer>
            <div className="sm">
                {/* <h1><FaAppleAlt size='5rem' color="red" />Icon trial</h1> */}
                <a href="#"><FaTwitterSquare size='3rem' /></a>
                <a href="#"><FaFacebookSquare size='3rem' /></a>
                <a href="#"><FaInstagramSquare size='3rem' color="red" /></a>
                <a href="#"><FaGithubSquare size='3rem' color="gray" /></a>
            </div>
        </footer>
    )
}