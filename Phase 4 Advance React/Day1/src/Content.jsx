import React from "react";
import { useTheme } from "./ThemeContext";

const Content = () => {
  const { theme } = useTheme();

  const style = {
    background: theme === "light" ? "#fff" : "#333",
    color: theme === "light" ? "#000" : "#fff",
    padding: "1rem",
  };

  return <div style={style}>This is {theme} theme!</div>;
};

export default Content;
