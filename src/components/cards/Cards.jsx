import React, {useEffect, useState} from "react";
import {getList} from "../../assets/api/req";
import Loading from "../../assets/images/loading.gif"

export default function Cards() {
    const [movies, setMovies] = useState()

    useEffect( ()=>{
        getList(setMovies)
    },[])

    console.log(movies)

    return (
        <div>
            {!movies ? (<img src={Loading} alt={"Loading..."}/>): (
                <main>
                    {movies.map((movie)=>(
                        <div className="card" key={movie.id}>
                            <img key={movie.id} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.original_title} />
                            <h1>{movie.title}</h1>
                            <p>{movie.vote_average}</p>
                        </div>
                        )
                    )}
                </main>
            )}
        </div>
    )}