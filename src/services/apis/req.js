import axios from "axios";
import {api} from "./apiConfig";


// função de caputura de imagens dos filmes
export const getList = (setState) => {
  axios.get(`${api.url}/movie/popular?${api.key}&${api.languageBr}&page=1`)
      .then((response)=>{
        setState(response.data.results)})
      .catch((error)=>{
        console.log(error)
  })
}

// Função de captura de detalhes dos filmes
export const getDetails = (id, setState) => {
  axios.get(`${api.url}/movie/${id}?${api.key}&${api.languageBr}`)
      .then((response)=>{
          setState(response)
        console.log(response)})
      .catch((error)=>{
    console.log(error)})
}