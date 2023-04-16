import styled from "styled-components";

export const PostCardContainer = styled.div`
  background: ${({theme})=>theme.post};
  width: 100%;
  max-height: 260px;
  padding: 2rem;
  border-radius: 10px;
  position: relative;
  overflow:hidden;
  text-overflow: ellipsis;
  cursor: pointer;
  box-shadow: 0px 0px 5px 1px ${({theme})=>`${theme.primary}5F`};

  &::after {
    content: " ";
    display: inline-block;
    position: absolute;
    z-index: 2;
    left: 0;
    bottom: 0;
    width: inherit;
    height: 20px;
    background-color: transparent;
    filter: blur(2);
  }

  h2 {
    color: ${({theme})=>theme.title};
    margin-bottom: 1.25rem;
  }

  p {
    text-align: left;
    color: ${({theme})=>theme.text};

  }
`;