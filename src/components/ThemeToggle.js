import React, { useContext } from 'react'
import ThemeContext from '../context/theme/themeContext'

const ThemeToggle = () => {
  const themeContext = useContext(ThemeContext)
  const { darkMode, setDarkMode, setLightMode } = themeContext

  const handleClick = () => {
    darkMode ? setLightMode() : setDarkMode()
  }

  return (
    <button onClick={handleClick} className='theme'>
      {darkMode ? "☀️" : "🌙"}
    </button>
  )
}

export default ThemeToggle
