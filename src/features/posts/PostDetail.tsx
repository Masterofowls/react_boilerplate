import { useParams } from 'react-router'
import { useGetPostQuery } from './postsApi'

export default function PostDetail() {
  const { id } = useParams()
  const { data, isLoading, error } = useGetPostQuery(Number(id))

  if (isLoading) return <p>Loading…</p>
  if (error || !data) return <p role="alert">Failed to load post.</p>

  return (
    <article>
      <h1>{data.title}</h1>
      <p>{data.body}</p>
    </article>
  )
}
