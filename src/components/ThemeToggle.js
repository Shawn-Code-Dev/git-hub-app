import React, { useContext } from 'react'
import ThemeContext from '../context/theme/themeContext'

const ThemeToggle = () => {
  const themeContext = useContext(ThemeContext)
  const { darkMode, setDarkMode, setLightMode } = themeContext

  const handleClick = () => {
    darkMode ? setLightMode() : setDarkMode()
    console.log(darkMode)
  }

  return (
    <button onClick={handleClick}>
      {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
    </button>
  )
}

export default ThemeToggle
