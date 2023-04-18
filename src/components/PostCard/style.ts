import styled from "styled-components";

export const PostCardContainer = styled.div`
  background: ${({theme})=>theme.post};
  width: 100%;
  height: 260px;
  padding: 2rem;
  border-radius: 10px;
  position: relative;
  transition: all 0.2s ease;
  border: 1px solid transparent;
  box-shadow: 0px 0px 5px 1px ${({theme})=>`${theme.primary}5F`};

  &:hover{
    border-color: ${({theme})=>theme.primary};
  }

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
    display: -webkit-box;
    -webkit-line-clamp: 2; /* Change the value to limit the number of lines */
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%; /* Change the value to limit the width of the container */
  }

  p {
    color: ${({theme})=>theme.text};
    display: -webkit-box;
    -webkit-line-clamp: 4; /* Change the value to limit the number of lines */
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%; /* Change the value to limit the width of the container */
  }
`;