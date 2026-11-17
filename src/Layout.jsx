import { Outlet, NavLink } from 'react-router-dom'
import { shots } from './shots/index.js'

export default function Layout() {
  return (
    <div className="app">
      <nav className="nav">
        <NavLink to="/" end className="nav-link">Home</NavLink>
        {shots.map((shot) => (
          <NavLink key={shot.path} to={`/${shot.path}`} className="nav-link">
            {shot.title}
          </NavLink>
        ))}
      </nav>
      <main className="stage">
        <Outlet />
      </main>
    </div>
  )
}
