import { Link, Element } from 'react-scroll'

const Home = () => {
  return (
    <section>
      <h1>Home</h1>
    </section>
  )

}

const About = () => {
  return (
    <section>
      <h1>About</h1>
    </section>
  )

}

const Navigation = () => {
  return (
    <>
      <aside className="sidebar">
        <nav className="site-navigation">
          <ul>
            <li><Link to="home" smooth={true} spy={true} duration={250}>Home</Link></li>
            <li><Link to="about" smooth={true} spy={true} duration={250}>About</Link></li>
            <li><Link to="projects" smooth={true}>Projects</Link></li>
            <li><Link to="contacts" smooth={true}>Contacts</Link></li>
          </ul>
        </nav>
      </aside>
      <Element name="home">
        <Home />
      </Element>
      <Element name="about">
        <About />
      </Element>
    </>
  )
}

export default Navigation