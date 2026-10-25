import { NavLink, Outlet } from 'react-router'

export default function RootLayout() {
  return (
    <>
      <nav className="nav">
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/posts">Posts</NavLink>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  )
}
