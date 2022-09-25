import styled from "styled-components";

export const HeaderStyle = styled.header`
  display: flex;
  width: 100%;
  box-sizing: border-box;
  background-color: black;
  
  img{
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
  
  @media screen and (min-width: 850px){
    height: 90vh;
  }
`