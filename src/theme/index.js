import { createMuiTheme, fade } from "@material-ui/core";
import typography from "./typography";

export const light = createMuiTheme({
  palette: {
    background: {
      default: "#f4f6f8",
      paper: "#ffffff",
    },
    primary: {
      main: "#EA5B85",
    },
    text: {
      primary: "#202856",
      secondary: `#9DA3BE`,
    },
    divider: fade(`#9DA3BE`, 0.2),
  },

  typography,
});

export const dark = createMuiTheme({
  palette: {
    background: {
      default: "#18191A",
      paper: "#242526",
    },
    primary: {
      main: "#EA5B85",
    },
    text: {
      primary: "#fafafa",
      secondary: `#9DA3BE`,
    },
    divider: fade(`#9DA3BE`, 0.2),
  },
  typography,
});
