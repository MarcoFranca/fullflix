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
                        <div className="card">
                            <img key={movie.id} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.original_title} />
                        </div>
                        )
                    )}
                </main>
            )}
        </div>
    )}