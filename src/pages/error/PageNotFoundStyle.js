import styled from "styled-components";
import {colors} from "../../assets/global/colors";

export const Main = styled.main`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    img {
      max-width: 100%;
      max-height: 100%;
    }
`

export const Div = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
  margin: 4rem 0;

  .error-title{
    font-size: 3rem;
    color: ${colors.colorAlert};
  }

  .error-text{
    font-size: 1rem;
  }

@media screen and (min-width: 1024px) {
   display: none;
}
`
