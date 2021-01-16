import React from "react";
import { useRoutes } from "react-router-dom";
import routes from "src/routes";
import { makeStyles, useTheme } from "@material-ui/core";
import GlobalStyles from "./components/GlobalStyles";
import { ThemeProvider } from "@material-ui/core";
import { useSelector } from "react-redux";
import { light, dark } from "src/theme";

// const useStyles = makeStyles((theme) => {
//   console.log(theme);
// });

function App() {
  // const classes = useStyles();
  // const theme = useTheme();
  const routing = useRoutes(routes);
  const { darkMode } = useSelector((state) => state);

  return (
    <ThemeProvider theme={darkMode ? dark : light}>
      <GlobalStyles />
      <div className="App">{routing}</div>
    </ThemeProvider>
  );
}

export default App;
