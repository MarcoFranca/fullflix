import styled from "styled-components";
import {Link} from "react-router-dom";

export const DivContainer = styled.main`
  display: flex;
  flex-direction: column;
  width: 100vw;
  img{
    width: 100%;
  }
`

export const DivCardContent = styled.div`
    padding: 1.5rem;
  h2{
    font-size: 1.8rem;
    font-weight: 800;
    span{
      font-weight: 500;
      font-size: 1.8rem;
      text-align: justify;
    }
    
`

export const LinkButton = styled(Link)`
  display: flex;
  text-decoration: none;
  font-size: 1.2rem;
  color: white;
  align-items: center;
  justify-content: center;
  height: 3rem;
  width: 10rem;
  border-radius: 0.8rem;
  background-color: rgba(227, 20, 20, 1);

  :hover {
    background-color: rgba(245, 58, 58, 0.85);
    transition: 0.8s;
  }
` ;
