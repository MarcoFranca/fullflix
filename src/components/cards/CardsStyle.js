import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  background-color: black;
  width: 100% ;
  padding: 1rem;
  
  h1{
    font-size: 2rem;
    color: white;
  }
  @media screen and (min-width: 750px){
    align-items: initial;
  }
`

export const MainSectionContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  color: white;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  

  .card{
    justify-self: center;
    align-self: center;
    width: 300px;
    min-height: 630px;
    border: solid gray 1px;
    border-radius: 5px;
    overflow: hidden;
    background-color: black;

    img{
      width: 100%;
      height: 450px;
      object-fit: cover;
    }
    
    h2, p{
      pointer-events: none;
    }

    .card__content{
      padding: 0 1rem 1rem 1rem;
    }

    :hover{
      border: solid red 1px;
      transition: 500ms;
      @media screen and (min-width: 1000px){
        transform: scale(1.1);
        cursor: pointer;
      }
    }
  }
  @media screen and (min-width: 400px){
    grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
    .card {
      overflow: hidden;
      width: 330px;
      height: 650px;
    }
  }
`