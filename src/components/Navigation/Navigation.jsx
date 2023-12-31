import { Routes, Route, Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <>
      <aside>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contacts">Contacts</Link></li>
        </ul> 
      </aside>
    </>
  )
}

export default Navigation