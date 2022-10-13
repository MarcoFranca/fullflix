import styled from "styled-components";
import {colors} from "../../assets/global/colors";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 5rem;
  background-color: ${colors.nightBackground};
  box-sizing: border-box;
  
  h1{
    color: ${colors.colorWhite};
    font-size: 1.8rem;
  }
`
