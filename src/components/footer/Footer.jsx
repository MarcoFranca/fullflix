import React from "react";
import {FooterStyle} from "./FooterStyle";
import {useSelector} from "react-redux";

export default function Footer() {
    const state2 = useSelector((state)=> state.page.value)
    return (
        <FooterStyle>
            <h3> React movies © 2022 todos os direitos reservados. | {state2} </h3>
        </FooterStyle>
    )
}