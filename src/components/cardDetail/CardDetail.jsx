import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {DivCardContent, DivContainer, LinkButton} from "./CardDetailStyle";
import {format} from "date-fns";
import {goToIndex} from "../../assets/redux/counterSlice";

export default function CardDetail() {
    const state = useSelector((state)=> state.page.value2)
    const dispatch = useDispatch()

    return (
        <DivContainer key={state.id} className="card">
            <div className="img">
                <img src={`https://image.tmdb.org/t/p/w500${state.data.poster_path}`} alt={state.data.title}/>
            </div>
            <DivCardContent className="card__content">
                <h2><b>Título: </b>{state.data.title}</h2>
                <h2><b>Lançamento:</b>{format(new Date(state.data.release_date), 'dd/MM/yyyy')}</h2>
                <h2><b>Genero:</b>
                    {state.data.genres.map((genre)=>(
                            <span key={genre.id}>{genre.name}</span>

                    ))}
                </h2>
                <h2><b>Sinopse: </b> {state.data.overview}</h2>
                <h2><b>Nota: </b>{state.data.vote_average.toFixed(2)}</h2>
                <LinkButton to="/" key={state.data.id} onClick={()=>dispatch(goToIndex())}>
                    Voltar para Home
                </LinkButton>
            </DivCardContent>
        </DivContainer>
    )}