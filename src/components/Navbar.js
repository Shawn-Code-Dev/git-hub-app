import React from 'react'
import { Link } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'

const Navbar = ({ icon, title }) => {

  return (
      <nav className='navbar bg-primary'>
        <h1>
          <i className={icon} /> {title}
        </h1>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/login'>Login</Link>
          </li>
          <li>
            <Link to='/register'>Register</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <ThemeToggle />
        </ul>
      </nav>
    )
}

Navbar.defaultProps = {
  title: 'Github App',
  icon: 'fab fa-github'
}

export default Navbar
