import React from "react";
import { CssBaseline, makeStyles } from "@material-ui/core";
import Navigation from "./Navigation.js";
import TopBar from "./TopBar";
import SiteWrapper from "./SiteWrapper";

function SiteLayout({ ...props }) {
  return (
    <CssBaseline>
      <TopBar {...props} />
      <Navigation />
      <SiteWrapper />
    </CssBaseline>
  );
}

export default SiteLayout;
