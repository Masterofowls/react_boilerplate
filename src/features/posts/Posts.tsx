import { Link } from 'react-router'
import { useGetPostsQuery } from './postsApi'

export default function Posts() {
  const { data, isLoading, error } = useGetPostsQuery()

  if (isLoading) return <p>Loading…</p>
  if (error) return <p role="alert">Failed to load posts.</p>

  return (
    <ul>
      {data?.map((post) => (
        <li key={post.id}>
          <Link to={`/posts/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  )
}
