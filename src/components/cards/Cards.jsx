import React, {useEffect, useState} from "react";
import {getDetails, getList} from "../../services/apis/req";
import Loading from "../../assets/images/loading.gif"
import {Main, MainSectionContainer} from "./CardsStyle";
import {useDispatch} from "react-redux";
import {getMovieDetails, goToDetail} from "../../assets/redux/counterSlice";
import {useNavigate} from "react-router-dom";
import {format} from "date-fns";

export default function Cards() {
    const dispatch = useDispatch();
    const navigate = useNavigate()

//**************** Hooks  **********************
    const [movies, setMovies] = useState([]);
    const [details, setDetails] = useState();

    useEffect( ()=>{
        getList(setMovies)
    },[])

    useEffect(()=>{
        goDetails(navigate, details)
    },[details, navigate])

    // ************ Functions ***************

    const goDetails = (navigate, details)=>{
        dispatch(getMovieDetails(details))
        if (!details){
            console.log("falso")
        }else {
            console.log("verdadeiro")
            console.log(details)
            navigate('/details')

        }
    }

    const onClick = (event) => {
        dispatch(goToDetail())
        getDetails(event.target.id, setDetails)
    }


    console.log(movies)

    return (
        <Main>
            <h1>Filmes Populares</h1>
            {!movies ? (<img src={Loading} alt={"Loading..."}/>): (
                <MainSectionContainer>
                    {movies.map((movie)=>(
                            <div key={movie.id}>
                                <div className="card" key={movie.id}
                                     onClick={(event)=> {
                                         onClick(event)}}
                                     id={movie.id}
                                >
                                    <img id={movie.id} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.original_title} />
                                    <div id={movie.id} className="card__content">
                                        <h2>{movie.title}</h2>
                                        <p>Lançamento: {format(new Date(movie.release_date), 'dd/MM/yyyy')}</p>
                                        <p>Nota: {movie.vote_average}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    )}
                </MainSectionContainer>
            )}
        </Main>
    )}