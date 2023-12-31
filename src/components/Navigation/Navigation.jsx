import { Routes, Route, Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <>
      <aside>
        <nav className="site-navigation">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contacts">Contacts</Link></li>
        </ul>
        </nav> 
      </aside>
    </>
  )
}

export default Navigation