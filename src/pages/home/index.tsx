import {
  ArrowSquareUpRight,
  Buildings,
  MapPin,
  Users
} from "@phosphor-icons/react";
import { useTheme } from "styled-components";
import {
  CardGridContainer,
  HomePageContainer,
  SearchBarContainer,
  UserProfileContainer,
  UserProfileImage,
  UserProfileInformation
} from "./style";
import { useQuery } from "@tanstack/react-query";
import { PostCard } from "@/components/PostCard";
import { githubUsersBaseApi, githubSearchsBaseApi } from "@/services/github/api/bases";
import { ChangeEvent, useEffect, useState } from "react";
import { IUserProfile } from "@/types/domains/userProfile";
import { IUserPost } from "@/types/domains/userPost";
import { Link } from "react-router-dom";

import useDebounce from "@/hooks/useDebounce";

const fetchUserProfile = async () => {
  const {data} = await githubUsersBaseApi.get("/victorhsdev");
  return data;
};

const fetchUserPosts = async (searchName: string) => {
  const {data} = await githubSearchsBaseApi.get(`/issues?q=${searchName}repo:victorhsdev/githublog`);
  return data;
}

interface IUserPosts {
  total_count: number,
  incomplete_results: boolean,
  items: IUserPost[]
}

export function HomePage() {
  const theme = useTheme();

  const [searchPostName, setSearchPostName] = useState("");
  const debouncedValue = useDebounce<string>(searchPostName, 500)

  const userProfileQuery = useQuery<IUserProfile>(["@githubblog-owner-v1"], fetchUserProfile, {enabled: false});
  const userPostsQuery = useQuery<IUserPosts>(["@githubblog-posts-v1"], async () => await fetchUserPosts(searchPostName), {enabled: false});

  useEffect(()=> {
    userProfileQuery.refetch();
  }, [])

  useEffect(()=> {
    userPostsQuery.refetch();
  }, [debouncedValue]);

  function handleChangeSearchName(event: ChangeEvent<HTMLInputElement>){
    setSearchPostName(event.target.value)
  }

  return (
    <HomePageContainer>
      <UserProfileContainer>
        <UserProfileImage src={userProfileQuery.data?.avatar_url} alt={userProfileQuery.data?.name}/>
        <UserProfileInformation>
          <h1>{userProfileQuery.data?.name}</h1>
          <p>{userProfileQuery.data?.bio}</p> 
          <ul>
            <li>
              <MapPin size={22} color={theme.label} weight="duotone" />
              <span>{userProfileQuery.data?.location}</span>
            </li>
            <li>
              <Buildings size={22} color={theme.label} weight="duotone" />
              <span>{userProfileQuery.data?.company.split(" | ")[0]}</span>
            </li>
            <li>
              <Users size={22} color={theme.label} weight="duotone" />
              <span>{userProfileQuery.data?.followers} seguidores</span>
            </li>
            <li>
              <a target="_blank" href="https://github.com/victorhsdev">
                <pre>{userProfileQuery.data?.login}</pre>
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
        <input value={searchPostName} onChange={handleChangeSearchName} placeholder="Buscar conteúdo"/>
      </SearchBarContainer>
      <CardGridContainer>
        {userPostsQuery?.data?.items.map((post)=> {
          return (
            <Link to={`/posts/${post.number}`}>
              <PostCard 
                key={post.id}
                title={post.title} 
                description={post.body} 
                time={post.updated_at}
              /> 
            </Link>
           
          );
        })}
      </CardGridContainer>
    </HomePageContainer>
  )
}