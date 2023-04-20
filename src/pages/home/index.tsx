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
import { ChangeEvent, useEffect, useLayoutEffect, useState } from "react";
import { IUserProfile } from "@/types/domains/userProfile";
import { IUserPost } from "@/types/domains/userPost";
import { Link } from "react-router-dom";
import { Skeleton } from "@/components/Skeleton";

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
  const debouncedValue = useDebounce<string>(searchPostName, 500);

  const userProfileQuery = useQuery<IUserProfile>(["@githubblog-owner-v1"], fetchUserProfile, {enabled: false});
  const userPostsQuery = useQuery<IUserPosts>(["@githubblog-posts-v1"], async () => await fetchUserPosts(searchPostName), {enabled: false});

  useLayoutEffect(()=> {
    window.document.title = "Github Blog - Victor Silva Dev";
    window.scrollTo(0,0);
  }, [])

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
        { userProfileQuery?.isLoading
          ? <Skeleton height="148px" width="148px"/> 
          : <UserProfileImage src={userProfileQuery.data?.avatar_url} alt={userProfileQuery.data?.name}/>
        }
        <UserProfileInformation>
          <h1>
            { userProfileQuery?.isLoading 
              ? <Skeleton width="150px" height="25px"/> 
              : userProfileQuery.data?.name
            }
          </h1>
          <p>
            { userProfileQuery?.isLoading
              ? <Skeleton  height="50px"/>
              : userProfileQuery.data?.bio
            }
          </p> 
          <ul>
            <li>
              { userProfileQuery?.isLoading  
                ? <Skeleton width='100px' height="25px" /> 
                : <>
                  <MapPin size={22} color={theme.label} weight="duotone" />
                  <span>{userProfileQuery.data?.location}</span>
                </>
              }
            </li>
            <li>
              { userProfileQuery?.isLoading  
                ? <Skeleton width='100px' height="25px" /> 
                : <>
                  <Buildings size={22} color={theme.label} weight="duotone" />
                  <span>{userProfileQuery.data?.company.split(" | ")[0]}</span>
                </>
              }
            </li>
            <li>
              { userProfileQuery?.isLoading  
                ? <Skeleton width='100px' height="25px" /> 
                : <>
                  <Users size={22} color={theme.label} weight="duotone" />
                  <span>{userProfileQuery.data?.followers} seguidores</span>
                </>
              }
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
          <span>{userPostsQuery?.data?.total_count} publicações</span>
        </div>
        <input value={searchPostName} onChange={handleChangeSearchName} placeholder="Buscar conteúdo"/>
      </SearchBarContainer>
      <CardGridContainer>
        {userPostsQuery?.isLoading 
        ? [...Array(6)].map((_, index) => <Skeleton height={"260px"} key={index}/>)
        : userPostsQuery?.data?.items.map((post) => (
            <Link to={`/posts/${post.number}`} key={post.id}>
              <PostCard 
                key={post.id}
                title={post.title} 
                description={post.body} 
                time={post.updated_at}
              /> 
            </Link>
          ))
        }
      </CardGridContainer>
    </HomePageContainer>
  )
}