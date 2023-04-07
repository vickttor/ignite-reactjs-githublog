import { useParams } from 'react-router-dom';

export function PostPage() {

  const {id} = useParams();

  return (
    <h1>Post: {id}</h1>
  )
}