import React from "react";
import NetflixLogo from "../../assets/images/Logo-Netflix-1.gif"
import {HeaderStyle} from "./HeaderStyle";

export default function Header() {
    return (
        <HeaderStyle>
            <img src={NetflixLogo} alt={"logo Netflix"}/>
        </HeaderStyle>
    )
}