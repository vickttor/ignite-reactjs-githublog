import { PostCardContainer } from "./style";

interface IPostCardProps {
  title: string;
  description: string;
  time: Date
}

export function PostCard(props: IPostCardProps) {

  const {title, description, time} = props;

  return(
    <PostCardContainer>
      <h2>{title}</h2>
      <p>{description}</p>
    </PostCardContainer>
  );
}