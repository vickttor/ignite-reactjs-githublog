import { useTheme } from "styled-components";
import { HomePageContainer, SearchBarContainer, UserProfileContainer, UserProfileImage, UserProfileInformation } from "./style";
import { GithubLogo, Buildings, Users, ArrowSquareOut } from "@phosphor-icons/react";

export function HomePage() {
  const theme = useTheme();

  return (
    <HomePageContainer>
      <UserProfileContainer>
        <UserProfileImage src="https://github.com/victorhsdev.png" alt="Victor Silva"/>
        <UserProfileInformation>
          <h1>Victor Hugo da Silva</h1>
          <p>Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</p>
          
          <ul>
            <li>
              <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"/>
            </li>
            <li>
              <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white"/>
            </li>
            <li>
              <img src="https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"/>
            </li>
            <li>
              <img src="https://img.shields.io/badge/Flutter-%2302569B.svg?style=for-the-badge&logo=Flutter&logoColor=white"/>
            </li>
          </ul>

          <ul>
            <li>
              <GithubLogo size={22} color={theme.label} weight="duotone" />
              <span>victorhsdev</span>
            </li>

            <li>
              <Buildings size={22} color={theme.label} weight="duotone" />
              <span>AX4B</span>
            </li>

            <li>
              <Users size={22} color={theme.label} weight="duotone" />
              <span>193 seguidores</span>
            </li>

            <li>
              <a target="_blank" href="https://github.com/victorhsdev">
                Github
                <ArrowSquareOut size={20} weight="duotone" />
              </a>
            </li>
          </ul>
        </UserProfileInformation>
      </UserProfileContainer>

      <SearchBarContainer>
        <div>
          <h3>Publicações</h3>
          <span>6 publicações</span>
        </div>

        <input placeholder="Buscar conteúdo"/>
      </SearchBarContainer>

    </HomePageContainer>
  )
}