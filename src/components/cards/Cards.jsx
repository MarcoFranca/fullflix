import React, {useEffect, useState} from "react";
import {getList} from "../../assets/api/req";
import Loading from "../../assets/images/loading.gif"
import {Main, MainSectionContainer} from "./CardsStyle";

export default function Cards() {
    const [movies, setMovies] = useState([])

    useEffect( ()=>{
        getList(setMovies)
    },[])

    console.log(movies)

    return (
        <Main>
            <h1>Filmes Populares</h1>
            {!movies ? (<img src={Loading} alt={"Loading..."}/>): (
                <MainSectionContainer>
                    {movies.map((movie)=>(
                            <div className="card" key={movie.id}>
                                <img key={movie.id} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.original_title} />
                                <h2>Título: {movie.title}</h2>
                                <p>Nota: {movie.vote_average}</p>
                            </div>
                        )
                    )}
                </MainSectionContainer>
            )}
        </Main>
    )}