import React, { Fragment } from 'react'

const About = () => {
  return (
    <Fragment>
      <h1>About This App</h1>
      <p>This is an app that uses the Github API to search users and see their latest repos!</p>
      <p>I built this app first using class based components with prop-drilling to familiarize myself with older code-bases. I then converted it all to functional components using useState hooks, useReducer and ContextAPI</p>
    </Fragment>
  )
}

export default About;