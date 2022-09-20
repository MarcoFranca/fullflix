import React from "react";

export default function CardDetail(props) {
    return (
        <div>
            <img src={props.urlImg} alt={props.title}/>
            <div className="content">
                <h1>{props.title}</h1>
                <p>{props.details}</p>
            </div>
        </div>
    )}