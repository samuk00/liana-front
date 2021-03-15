import React from 'react'
import { FaBars } from "react-icons/fa";

const Navbar = () => {

    const myFunction = () => {
        const navContainer = document.getElementById("navbar-container")
        const navElement = document.getElementById("navbar")
        const navLinks = document.getElementById("nav-bottom-links")

        if (navContainer.className === "navbar-container") {
            navContainer.className += " responsive"
        } else {
            navContainer.className = "navbar-container"
        }

        if (navElement.className === "navbar") {
            navElement.className += " responsive"
        } else {
            navElement.className = "navbar"
        }

        if (navLinks.className === "nav-bottom-links") {
            navLinks.className += " responsive"
        } else {
            navLinks.className = "nav-bottom-links"
        }
    }

    return (
        <div id="navbar-container">
            <div id="navbar">
                <span id="bars"><FaBars id="bars-icon" onClick={() => myFunction()} /></span>
                <div className="nav-items">
                    <a href="/">News</a>
                    <a href="/">Intranet</a>
                    <select>
                        <option>In english</option>
                    </select>
                </div>
            </div>
            <div className="nav-bottom">
                <div className="logo">
                    <img src="logo.png" alt="logo" />
                </div>
                <div className="nav-bottom-items">
                    <div id="nav-bottom-links">
                        <a href="/">Company</a>
                        <a href="/">Products</a>
                        <a href="/">Contact us</a>
                    </div>
                    <div className="nav-bottom-search">
                        <input placeholder="Search" />
                        <button>Search</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
