import React, { useContext } from "react";
import ThemeContext from "../../context/theme/themeContext";

const RepoItem = ({ repo }) => {
  const themeContext = useContext(ThemeContext);
  const { darkMode } = themeContext;

  return (
    <div className={`${darkMode ? "card-dark" : "card-light"}`}>
      <a href={repo.html_url}>{repo.name}</a>
    </div>
  );
};

export default RepoItem;
