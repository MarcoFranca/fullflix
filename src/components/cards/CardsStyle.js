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
    }
    :hover{
      border: solid red 1px;
      position: relative;
      width: 320px;
      transition: 500ms;
      cursor: pointer;
    }
  }
`