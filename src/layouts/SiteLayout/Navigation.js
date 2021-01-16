import React from "react";
import {
  Typography,
  Box,
  makeStyles,
  Paper,
  Icon,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { Home, Grid, User } from "react-feather";
import clsx from "clsx";

const useStyle = makeStyles((theme) => {
  console.log(theme);
  return {
    paper: {
      position: "absolute",
      top: "50%",
      left: 0,
      transform: "translateY(-50%)",
      zIndex: 9999,
      height: "fit-content",

      [theme.breakpoints.down("md")]: {
        bottom: 0,
        top: "unset",
        left: "50%",
        width: "fit-content",
        transform: "translate(-50%, 0)",
      },
    },
    menuWrapper: {
      padding: theme.spacing(1),
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1),
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",

      [theme.breakpoints.down("md")]: {
        flexDirection: "row",
      },
    },

    menuItem: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      marginBottom: theme.spacing(1),
      cursor: "pointer",
      width: "100%",
      padding: theme.spacing(1),
      borderRadius: 3,
      transition: theme.transitions.create(["background-color"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.short,
      }),
      [theme.breakpoints.down("md")]: {
        marginBottom: 0,
        marginRight: theme.spacing(1),
        width: 80,
      },
      "&:last-child": {
        marginBottom: 0,
        marginRight: 0,
      },
      "&:hover": {
        backgroundColor: theme.palette.primary.main,
      },
    },
    menuItemActive: {
      backgroundColor: theme.palette.primary.main,
    },
  };
});

function Navigation() {
  const classes = useStyle();
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Paper elevation={0} className={classes.paper}>
      <Box className={classes.menuWrapper}>
        <Box className={clsx(classes.menuItem, classes.menuItemActive)}>
          <Icon>
            <Home />
          </Icon>
          <Typography variant="caption">Intro</Typography>
        </Box>

        <Box className={classes.menuItem}>
          <Icon>
            <Grid />
          </Icon>
          <Typography variant="caption">Skills</Typography>
        </Box>

        <Box className={classes.menuItem}>
          <Icon>
            <User />
          </Icon>
          <Typography variant="caption">Contact</Typography>
        </Box>
      </Box>
    </Paper>
  );
}

export default Navigation;
