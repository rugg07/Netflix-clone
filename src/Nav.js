import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import "./Nav.css"
function Nav() {

    const [show, handleShow] = useState(false);

    const history = useHistory(); {/* Keeps track of the pages */ }

    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        }
        else {
            handleShow(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar)
        return () => {
            window.removeEventListener("scroll", transitionNavBar);
        }
    }, [])

    return (
        <div className={`nav ${show && `nav__black`}`}> {/*Means show nav__black class when true */}
            <div className="nav__contents">
                <img onClick={() => history.push("/")} className="nav__logo" src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
                    alt="Netflix" />

                <img onClick={() => history.push("/profile")} className="nav__avatar" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                    alt="avatar" /> {/* When the avatar is clicked it takes you to the Route with path "/profile" and on going back takes you to the main homescreen */}
            </div>
        </div>
    )
}

export default Nav
