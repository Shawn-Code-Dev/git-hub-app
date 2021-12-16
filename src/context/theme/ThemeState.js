import React, { useReducer } from "react";
import { DARKMODE, LIGHTMODE } from "../types";
import ThemeContext from "./themeContext";
import ThemeReducer from "./themeReducer";

const ThemeState = (props) => {
  const initialState = {
    darkMode: localStorage.getItem("darkMode"),
  };

  const [state, dispatch] = useReducer(ThemeReducer, initialState);

  const setDarkMode = () => dispatch({ type: DARKMODE });
  const setLightMode = () => dispatch({ type: LIGHTMODE });

  return (
    <ThemeContext.Provider
      value={{
        darkMode: state.darkMode,
        setDarkMode,
        setLightMode,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeState;
