import { Link, useParams } from 'react-router-dom';
import { PostContent, PostHeaderActions, PostHeaderContainer, PostHeaderInformations, PostHeaderTitle, PostPageContainer } from './style';
import { ArrowLeft, ArrowSquareUpRight, Calendar, ChatCircle, GithubLogo} from '@phosphor-icons/react';
import { useTheme } from 'styled-components';
import { githubUserReposBaseApi } from '@/services/github/api/bases';
import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { IUserPost } from '@/types/domains/userPost';

import ReactMarkdown from 'react-markdown'

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import nord from 'react-syntax-highlighter/dist/esm/styles/prism/nord';

import dayjs from "dayjs";

async function fetchPostContent(number: number) {
  const {data} = await githubUserReposBaseApi.get(`/victorhsdev/githublog/issues/${number}`);
  return data;
}

export function PostPage() {
  const theme = useTheme();

  const {id} = useParams();

  const postQuery = useQuery<IUserPost>(["@githubblog-post-v1"], async () => await fetchPostContent(Number(id)),{enabled:false});

  useEffect(()=> {
    postQuery.refetch(); //Every time the page be mounted the query will be fetched.
  }, [])

  useEffect(()=> {
    if(postQuery?.data) {
      window.document.title = postQuery?.data.title;
    }
  }, [postQuery?.data])

  return (
   <PostPageContainer>
      <PostHeaderContainer>
        <PostHeaderActions>
          <Link to="/" style={{display:'flex', alignItems:'center', gap:'0.5rem'}}>
            <ArrowLeft size={16} weight='regular' color={theme.primary}/>
            <span>VOLTAR</span>
          </Link>
          <Link target="_blank" to={postQuery?.data?.html_url ?? "#"} style={{display:'flex', alignItems:'center', gap:'0.5rem'}}>
            <pre>VER NO GITHUB</pre>
            <ArrowSquareUpRight size={16} weight="duotone" />
          </Link>
        </PostHeaderActions>
        <PostHeaderTitle>
          {postQuery?.data?.title}
        </PostHeaderTitle>
        <PostHeaderInformations>
          <li title="Escritor">
            <GithubLogo size={24} weight='duotone'/>
            <span>{postQuery?.data?.user.login}</span>
          </li>
          <li title={dayjs(postQuery?.data?.updated_at).format("DD/MM/YYYY-HH:MM")}>
            <Calendar size={24} weight='duotone'/>
            <span>{dayjs(postQuery?.data?.updated_at).diff(Date.now(), "days")} dias</span>
          </li>
          <li title="Quantidade de comentários">
            <ChatCircle size={24} weight='duotone'/>
            <span>{postQuery?.data?.comments}</span>
          </li>
        </PostHeaderInformations>
      </PostHeaderContainer>

      <PostContent>
       <ReactMarkdown 
        children={postQuery.data?.body ?? ""}
        components={{
          code({node, inline, className, children, ...props}) {
            const match = /language-(\w+)/.exec(className || '')
            return !inline && match ? (
              <SyntaxHighlighter
                {...props}
                children={String(children).replace(/\n$/, '')}
                style={nord}
                language={match[1]}
                PreTag="div"
              />
            ) : (
              <code {...props} className={className}>
                {children}
              </code>
            )
          }
        }} 
      />
      </PostContent>
   </PostPageContainer>
  )
}