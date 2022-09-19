import React from "react";
import img404 from '../../assets/images/ups-erro-404.jpg'
import {Div, Main} from "./PageNotFoundStyle";


export default function PageNotFound() {
    return (
        <Main>
            <Div>
                <h1 className='error-title'>Not Found</h1>
                <p className='error-text'>The resouce request cold not be found on this server!</p>
            </Div>
            <img src={img404} alt="Page is not found - 404"/>
        </Main>
    )
}