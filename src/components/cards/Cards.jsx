import React, {useEffect, useState} from "react";
import {getDetails, getList} from "../../services/apis/req";
import Loading from "../../assets/images/loading.gif"
import {Main, MainSectionContainer} from "./CardsStyle";
import {useDispatch} from "react-redux";
import {getMovieDetails, goToDetail} from "../../assets/redux/counterSlice";
import {useNavigate} from "react-router-dom";

export default function Cards() {
    const [movies, setMovies] = useState([]);
    const [details, setDetails] = useState();
    const dispatch = useDispatch();

    useEffect( ()=>{
        getList(setMovies)
    },[])

    useEffect(()=>{
        dispatch(getMovieDetails(details))
    },[details, dispatch])

    console.log(movies)

    const onHouverDetail = (event)=>{
        getDetails(event.target.id, setDetails)
        console.log(details)
    }
    let navigate = useNavigate()

    const click = (event, navigate) => {
        dispatch(goToDetail())
        onHouverDetail(event)

        navigate("/details")
    }

    return (
        <Main>
            <h1>Filmes Populares</h1>
            {!movies ? (<img src={Loading} alt={"Loading..."}/>): (
                <MainSectionContainer>
                    {movies.map((movie)=>(
                            <div key={movie.id}>
                                <div className="card" key={movie.id}
                                     onClick={(event)=> {
                                         click(event,navigate)}}
                                     id={movie.id}
                                >
                                    <img id={movie.id} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.original_title} />
                                    <h2>Título: {movie.title}</h2>
                                    <p>Nota: {movie.vote_average}</p>
                                </div>
                            </div>
                        )
                    )}
                </MainSectionContainer>
            )}
        </Main>
    )}