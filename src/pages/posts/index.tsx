import { Link, useParams } from 'react-router-dom';
import { PostContent, PostHeaderActions, PostHeaderContainer, PostHeaderInformations, PostHeaderTitle, PostPageContainer } from './style';
import { ArrowLeft, ArrowSquareUpRight, Calendar, GithubLogo } from '@phosphor-icons/react';
import { useTheme } from 'styled-components';
import { githubUserReposBaseApi } from '@/services/github/api/bases';
import { useQuery } from '@tanstack/react-query';
import { ReactElement, ReactNode, useEffect, useLayoutEffect, useState } from 'react';
import { IUserPost } from '@/types/domains/userPost';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { Skeleton } from '@/components/Skeleton';

import ReactMarkdown from 'react-markdown'
import dracula from 'react-syntax-highlighter/dist/esm/styles/prism/dracula';
import dayjs from "dayjs";

async function fetchPostContent(number: number) {
  const { data } = await githubUserReposBaseApi.get(`/vickttorugo/githublog/issues/${number}`);
  return data;
}

export function PostPage() {
  const theme = useTheme();
  const { id } = useParams();

  const postQuery = useQuery<IUserPost>(["@githubblog-post-v1"], async () => await fetchPostContent(Number(id)), { enabled: false });
  
  const[updated_at] = useState(dayjs(Date.now()).diff(postQuery?.data?.updated_at, "days"));


  useLayoutEffect(() => {
    window.document.title = "Github Blog - Victor Silva Dev";
    window.scrollTo(0, 0);
  }, [])

  useEffect(() => {
    postQuery.refetch(); //Every time the page be mounted the query will be fetched.
  }, [])

  useEffect(() => {
    if (postQuery?.data) {
      window.document.title = postQuery?.data.title;
    }
  }, [postQuery?.data])

  const isLoadingPostQuery = (component: ReactElement, widthSkeleton?: string, contentSpan?: ReactNode) => {
    return (postQuery.isLoading
      ? <Skeleton height="25px" width={widthSkeleton} /> :
      <>
        {component}
        <span>{contentSpan}</span>
      </>
    )
  }

  return (
    <PostPageContainer>
      <PostHeaderContainer>
        <PostHeaderActions>
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <ArrowLeft size={16} weight='regular' color={theme.primary} />
            <span>VOLTAR</span>
          </Link>
          <Link target="_blank" to={postQuery?.data?.html_url ?? "#"} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <pre>VER NO GITHUB</pre>
            <ArrowSquareUpRight size={16} weight="duotone" />
          </Link>
        </PostHeaderActions>
        {isLoadingPostQuery(
          <PostHeaderTitle>{postQuery?.data?.title}</PostHeaderTitle>,
          "25px")
        }
        <PostHeaderInformations>
          <li title="Escritor">
            {isLoadingPostQuery(
              <GithubLogo size={24} weight='duotone' />,
              "100px",
              postQuery?.data?.user.login)
            }
          </li>
          <li title={dayjs(postQuery?.data?.updated_at).format("DD/MM/YYYY-HH:MM")}>
            {isLoadingPostQuery(
              <Calendar size={24} weight='duotone' />,
              "100px",
              `${updated_at} dias`)
            }
          </li>
          <li title="Quantidade de comentários">
            {isLoadingPostQuery(
              <Calendar size={24} weight='duotone' />,
              "100px",
              postQuery?.data?.comments)
            }  
          </li>
        </PostHeaderInformations>
      </PostHeaderContainer>

      <PostContent>
        {postQuery.isLoading
          ? <div style={{ display: 'flex', flexDirection: "column", alignItems: 'flex-start', justifyContent: 'flex-start', gap: '1rem' }}>
            <Skeleton width={"90%"} height="25px" />
            <Skeleton width={"33%"} height="25px" />
            <Skeleton width={"75%"} height="25px" />
            <Skeleton height="150px" />
            <Skeleton width={"100%"} height="25px" />
            <Skeleton width={"100%"} height="25px" />
            <Skeleton width={"90%"} height="25px" />
            <Skeleton height="150px" />
            <Skeleton width={"90%"} height="25px" />
            <Skeleton width={"33%"} height="25px" />
            <Skeleton width={"75%"} height="25px" />
          </div>
          : <ReactMarkdown
            children={postQuery.data?.body ?? ""}
            components={{
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || '')
                return !inline && match ? (
                  <SyntaxHighlighter
                    {...props}
                    children={String(children).replace(/\n$/, '')}
                    style={dracula}
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
        }
      </PostContent>
    </PostPageContainer>
  )
}