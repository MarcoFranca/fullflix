import React from "react";
import FullflixLogo from "../../assets/images/backgroundFullflix.png"
import {HeaderStyle} from "./HeaderStyle";

export default function Header() {
    return (
        <HeaderStyle>
            <img src={FullflixLogo} alt={"logo Fullflix"}/>
        </HeaderStyle>
    )
}