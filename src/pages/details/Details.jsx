import React from "react";
import CardDetail from "../../components/cardDetail/CardDetail";
import {useDispatch, useSelector} from "react-redux";
import Footer from "../../components/footer/Footer";
import {Header} from "./DetailsStyle";
import Loading from "../../assets/images/Spinner.svg"
import {useNavigate} from "react-router-dom";
import {goToIndex} from "../../assets/redux/counterSlice";




export default function Details() {
    const state = useSelector((state)=> state.page.value2)
    const navigate = useNavigate()
    const dispatch = useDispatch()

const returnToIndex = (navigate) => {
    dispatch(goToIndex())
    setTimeout(()=>{
        navigate("/")
        console.error("não foi possivel carregar")
        }
        , 3000)
}

    return (
        (state === undefined) ?
            <div>
                <img src={Loading} alt="loading" style={{width:"50px"}}/>
                {returnToIndex(navigate)}
            </div>
            :
        <>
            <Header>
                <h1>{state.data.title}</h1>
            </Header>
            <CardDetail/>
            <Footer/>
        </>
    )
}

