import axios from "axios";
import {api} from "./apiConfig";


// função de caputura de imagens dos filmes
export const getList = (setState) => {
  axios.get(api.urlBase + api.popular + api.languageBr,{
      headers:{
      'Authorization': `Bearer ${api.token}`,
      'Content-Type': `application/json;charset=utf-8`
      }
  })
      .then((response)=>{
        setState(response.data.results)})
      .catch((error)=>{
        console.log(error)
  })
}

// Função de captura de detalhes dos filmes
export const getDetails = (id, setState,navigate) => {
  axios.get(api.urlBase + id + "?" + api.languageBr ,{
      headers:{
          'Authorization': `Bearer ${api.token}`,
          'Content-Type': `application/json;charset=utf-8`
      }
  })
      .then((response)=>{
          setState(response)
        console.log(response)
          navigate("/details")
        })
      .catch((error)=>{
    console.log(error)})
}