import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  overflow: hidden;
  height: 296px;
  position: absolute; 
  top: 0;
  left: 0;
  display: grid;
  place-content: center;
  z-index: -1;

  & svg {
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
  }

`;