import React from "react";
import {useSelector} from "react-redux";
import {DivCardContent, DivContainer, LinkButton} from "./CardDetailStyle";
import {format} from "date-fns";

export default function CardDetail() {
    const state = useSelector((state)=> state.page.value2)

    return (
            <DivContainer key={state.id} className="card">
                <img src={`https://image.tmdb.org/t/p/w500${state.data.poster_path}`} alt={state.data.title}/>
                <DivCardContent className="card__content">
                    <h2>Título: <span>{state.data.title}</span></h2>
                    <h2>Sinopse: <span>{state.data.overview}</span></h2>
                    <h2>Lançamento: <span>{format(new Date(state.data.release_date), 'dd/MM/yyyy')}</span></h2>
                    <h2>Nota: <span>{state.data.vote_average.toFixed(2)}</span></h2>
                    <LinkButton to="/" key={state.data.id} >
                         Voltar para Home
                    </LinkButton>
                </DivCardContent>
            </DivContainer>
    )}