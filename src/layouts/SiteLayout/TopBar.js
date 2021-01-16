import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import clsx from "clsx";
import { GitHub, Sun, Moon } from "react-feather";
import { useDispatch } from "react-redux";
import actions from "src/redux/actions";
import { useSelector } from "react-redux";
import { Menu } from "react-feather";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },

  // added by me
  appBar: {
    backgroundColor: "transparent",
    border: "unset",
  },
}));

function TopBar() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const theme = useTheme();
  const { darkMode } = useSelector((state) => state);

  const toggleDarkMode = () => {
    dispatch({
      type: actions.toggleDarkMode,
      payload: !darkMode,
    });
  };

  return (
    <div className={classes.grow}>
      <AppBar elevation={0} variant="outlined" className={clsx(classes.appBar)}>
        <Toolbar>
          <Box>
            <IconButton
              size="medium"
              style={{ color: theme.palette.text.primary }}
            >
              <Menu />
            </IconButton>
          </Box>

          <Box flexGrow={1} />
          <Box display="flex">
            <Box mr={2}>
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-haspopup="true"
                color="primary"
                onClick={toggleDarkMode}
              >
                {darkMode ? <Sun /> : <Moon />}
              </IconButton>
            </Box>
            <Box>
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-haspopup="true"
                color="primary"
              >
                <GitHub />
              </IconButton>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default TopBar;
