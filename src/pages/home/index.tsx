import { useTheme } from "styled-components";
import { 
  CardGridContainer,
  HomePageContainer, 
  SearchBarContainer, 
  UserProfileContainer, 
  UserProfileImage, 
  UserProfileInformation 
} from "./style";

import { GithubLogo, 
  Buildings, 
  Users, 
  ArrowSquareUpRight 
} from "@phosphor-icons/react";

import { PostCard } from "@/components/PostCard";

interface IPost {
  id: string;
  title: string;
  description: string;
  time: Date
}

export function HomePage() {
  const theme = useTheme();

  const posts: IPost[] = [
    {
      id: "1",
      title: "JavaScript data types and data structures",
      description: "Laboriosam architecto, aspernatur nostrum cupiditate ullam aut sequi magni nisi quidem corporis non quo quos. Beatae incidunt possimus et qui distinctio molestias voluptas est earum.",
      time: new Date()
    },
    {
      id: "2",
      title: "JavaScript data types and data structures",
      description: "Laboriosam architecto, aspernatur nostrum cupiditate ullam aut sequi magni nisi quidem corporis non quo quos. Beatae incidunt possimus et qui distinctio molestias voluptas est earum.",
      time: new Date()
    },
    {
      id: "3",
      title: "JavaScript data types and data structures",
      description: "Laboriosam architecto, aspernatur nostrum cupiditate ullam aut sequi magni nisi quidem corporis non quo quos. Beatae incidunt possimus et qui distinctio molestias voluptas est earum.",
      time: new Date()
    },
    {
      id: "4",
      title: "JavaScript data types and data structures",
      description: "Laboriosam architecto, aspernatur nostrum cupiditate ullam aut sequi magni nisi quidem corporis non quo quos. Beatae incidunt possimus et qui distinctio molestias voluptas est earum.",
      time: new Date()
    },
  ];

  return (
    <HomePageContainer>
      <UserProfileContainer>
        <UserProfileImage src="https://github.com/victorhsdev.png" alt="Victor Silva"/>
        <UserProfileInformation>
          <h1>Victor Hugo da Silva</h1>
          <p>Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</p> 
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
                <pre>Github</pre>
                <ArrowSquareUpRight size={16} weight="duotone" />
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

      <CardGridContainer>
        {posts.map((post)=> {
          return (
            <PostCard 
              key={post.id}
              title={post.title} 
              description={post.description} 
              time={post.time}
            />
          )
        })}
      </CardGridContainer>
    </HomePageContainer>
  )
}