import React from "react";
import NetflixLogo from "../../assets/images/Logo-Netflix-1.gif"
export default function Header() {
    return (
        <header>
            <img src={NetflixLogo} alt={"logo Netflix"}/>
        </header>
    )
}