import './App.css'

import React, { useContext } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './components/pages/Home'
import Registration from './components/pages/Registration'
import Alert from './components/Alert'
import About from './components/pages/About'
import UserInfo from './components/user/UserInfo'

import NotFound from './components/NotFound'
import Login from './components/pages/Login'
import ThemeContext from './context/theme/themeContext'

const App = () => {
  const themeContext = useContext(ThemeContext)
  const { darkMode } = themeContext
  return (
          <Router>
            <div className={`App ${darkMode ? 'bg-dark' : 'bg-light'}`}>
              <Navbar icon='fab fa-github' title='Gitbook App'/>
                <div className='container'>
                  <Alert />
                  <Routes>
                    <Route path='/' element={<Home />}/>
                    <Route path='/about' element={<About />} />
                    <Route path='/user/:login' element={<UserInfo />}/>
                    <Route path='/register' element={<Registration />} />
                    <Route path='/login' element={<Login />} />
                    <Route element={<NotFound />} />
                  </Routes> 
                </div>
            </div>
          </Router>
    )
}

export default App
