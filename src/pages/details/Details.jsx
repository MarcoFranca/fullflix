import React from "react";
import CardDetail from "../../components/cardDetail/CardDetail";
import {useSelector} from "react-redux";
import Footer from "../../components/footer/Footer";
import {Header} from "./DetailsStyle";
import Loading from "../../assets/images/Spinner.svg"




export default function Details() {
    const state = useSelector((state)=> state.page.value2)

            console.log(state)
    return (
        (state === undefined) ?
            <div>
                <img src={Loading} alt="loading" style={{width:"50px"}}/>
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