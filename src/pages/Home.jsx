import { shots } from '../shots/index.js'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <section className="page">
      <h1>Animo</h1>
      <p>A minimal CSS and JavaScript animation short film.</p>
      <ul className="shot-list">
        {shots.map((shot) => (
          <li key={shot.path}>
            <Link to={`/${shot.path}`}>{shot.title}</Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
