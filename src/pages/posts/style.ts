import styled from "styled-components";

export const PostPageContainer = styled.main`
  width: 100%;
  margin-top:  calc((-13.25rem - 1rem) / 2);
  position: relative;
`;



export const PostHeaderContainer = styled.section`
  width: 100%;
  min-height: 13.25rem;
  border-radius: .625rem;
  padding: 2rem 2.5rem;
  background-color: ${({theme})=>theme.bgcolor};
  box-shadow: 0px 2px 28px ${({theme})=>`${theme.primary}25`};
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;
`;

export const PostHeaderTitle = styled.h1`
  color: ${({theme})=>theme.title};
  font-size: 1.5rem;
  text-align: left;
`;

export const PostHeaderActions = styled.div`
  width: 100%;
  display:flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;
  span{
    line-height: 0;
  }
`;

export const PostHeaderInformations = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 2rem;
  flex-wrap: wrap;

  &:first-of-type {
    margin-bottom: 0.5rem;
  }

  li {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    line-height: 0;
    
    span {
      color: ${({theme})=>theme.subtitle}
    }

    a {
      position: absolute;
      top: 0;
      right: 0;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;

      & > * {
        line-height: 0;
      } 

      @media screen and (max-width: 720px) {
        position: relative;
      }
    }
  }

  @media screen and (max-width: 720px) {
    justify-content: center;
  }
`;

export const PostContent = styled.section`
  margin-top: 2.5rem;
  width: 100%;
  height: auto;

  p {
    font-size: 1rem;
    line-height: 1.6;
    color: ${({theme})=>theme.text};
    margin-top: 1rem;
    text-align: justify;

  }

  h2 {
    font-size: 1.5rem;
    width: max-content;
    color: ${({theme})=>theme.primary};
    border-bottom: 1px solid ${({theme})=>theme.primary};
    font-weight: 400;
    margin: 2rem 0;
  }

  h3 {
    margin: 1rem 0 0.5rem;
    color: ${({theme})=>`${theme.primary}A9`};
  }

`;