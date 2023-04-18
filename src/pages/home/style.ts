import styled from "styled-components";

// Container
export const HomePageContainer = styled.main`
  width: 100%;
  margin-top:  calc((-13.25rem - 1rem) / 2);
  position: relative;
`;

// User  Profile
export const UserProfileContainer = styled.section`
  width: 100%;
  min-height: 13.25rem;
  border-radius: .625rem;
  padding: 2rem 2.5rem;
  background-color: ${({theme})=>theme.bgcolor};

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  box-shadow: 0px 2px 28px ${({theme})=>`${theme.primary}25`};

  @media screen and (max-width: 720px) {
    flex-direction: column;
  }
`;

export const UserProfileImage = styled.img`
  width: 100%;
  max-width: 148px;
  border-radius: 8px;
  flex: 1;
`;

export const UserProfileInformation = styled.div`
  width: 100%;
  flex: 1;
  position: relative;

  h1 {
    margin-bottom: 0.5rem;

    @media screen and (max-width: 720px) {
      text-align: center;
    }
  }

  p {
    width: 100%;
    text-align: left;
    margin-bottom: 1.5rem;

    @media screen and (max-width: 720px) {
      text-align: justify;
    }
  }

  ul {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 1rem;
    flex-wrap: wrap;

    &:first-of-type {
      margin-bottom: 0.5rem;
    }

    li {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;

      svg {
        transition: all 0.1s ease-in;
        &:hover{
          transform: translateY(-3px);
        }
      }
      
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
  }

 
`;

// Search Bar

export const SearchBarContainer = styled.div`

  width: 100%;
  margin-top: 4.5rem;
  margin-bottom: 3rem;

  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;  

    span {
      color: ${({theme})=>theme.span};
      font-size: .875rem;
    }

    margin-bottom: .75rem;
  }
`;

// Cards Grid Container
export const CardGridContainer = styled.div`
  width: 100%;
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(2, 1fr);
  @media screen and (max-width: 720px){
    grid-template-columns: 1fr;
  }

  a {
    border: none;
  }

`


