import React from "react";
import { makeStyles } from "@material-ui/core";
import { Outlet } from "react-router-dom";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    justifyContent: "center",
    overflow: "hidden",
    paddingTop: 64,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
}));

function SiteWrapper() {
  const classes = useStyles();
  return (
    <div className={clsx(classes.wrapper)}>
      <Outlet />
    </div>
  );
}
export default SiteWrapper;
