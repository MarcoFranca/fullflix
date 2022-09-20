import axios from "axios";
import {key, url, languageBr} from "./apiConfig";


// função de capitura de imagens dos filmes
export const getList = (setState) => {
  axios.get(`${url}/movie/popular?${key}&${languageBr}&page=1`)
      .then((response)=>{
        setState(response.data.results)})
      .catch((error)=>{
        console.log(error)
  })
}

// Função de captura de detalhes dos filmes
export const getDetails = (id) => {
  axios.get(`${url}/movie/${id}?${key}&${languageBr}`)
      .then((response)=>{
        console.log(response)})
      .catch((error)=>{
    console.log(error)})
}