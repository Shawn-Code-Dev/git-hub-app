import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import GithubState from './context/github/GithubState'
import AlertState from './context/alert/AlertState'
import ThemeState from './context/theme/ThemeState'

ReactDOM.render(
  <GithubState>
      <AlertState>
        <ThemeState>
          <App />
        </ThemeState>
      </AlertState>
  </GithubState>,
  document.getElementById('root')
)
