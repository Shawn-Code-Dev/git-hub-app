import { LIGHTMODE, DARKMODE } from '../types'

const themeReducer = (state, action) => {
  switch (action.type) {
    case LIGHTMODE:
      localStorage.removeItem('darkMode')
      return {
        ...state,
        darkMode: false
      }
    case DARKMODE:
      localStorage.setItem('darkMode', true)
      return {
        ...state,
        darkMode: true
      }
    default:
      return state
  }
}

export default themeReducer
