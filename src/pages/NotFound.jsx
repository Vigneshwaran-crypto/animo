import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="page">
      <h1>Shot not found</h1>
      <Link to="/">Back to start</Link>
    </section>
  )
}
