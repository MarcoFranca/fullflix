import styled from "styled-components";
import {Link} from "react-router-dom";

export const DivContainer = styled.main`
  display: flex;
  flex-direction: column;
  width: 100vw;
  min-height: calc(100vh - 10rem);


  .img {
    width: 100%;
  }

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  span {
    padding: 0 .2rem;
    border-right: solid 2px rgba(0, 0, 0);
    :last-child{
      border-right: none;
    }
  }

  @media screen and (min-width: 900px) {
    flex-direction: row;
    .img {
      width: 45%;
      max-width: 800px;
      background-color: gray;
    }
  }
`

export const DivCardContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  max-width: 100vw;
  h2 {
    font-weight: 500;
    font-size: 1.2rem;
    text-align: justify;
    
    b {
      font-size: 1.4rem;
      font-weight: 800;
      width: 90%;
    }
  }
  @media screen and (min-width: 900px){
    width: 100%;
    justify-content: space-evenly;
    h2{
      
    max-width: 90%;
      
    }
    
    }

`

export const LinkButton = styled(Link)`
  display: flex;
  text-decoration: none;
  font-size: 1.2rem;
  color: white;
  align-items: center;
  justify-content: center;
  height: 4rem;
  width: 13rem;
  border-radius: 0.8rem;
  background-color: rgba(227, 20, 20, 1);

  :hover {
    background-color: rgba(245, 58, 58, 0.85);
    transition: 0.8s;
  }
` ;
