import { createMuiTheme, fade, colors } from "@material-ui/core";
import typography from "./typography";

// Pink Variant
//==============
// export const light = createMuiTheme({
//   palette: {
//     background: {
//       default: "#f4f6f8",
//       paper: "#ffffff",
//     },
//     primary: {
//       main: "#EA5B85",
//     },
//     text: {
//       primary: "#202856",
//       secondary: `#9DA3BE`,
//     },
//     divider: fade(`#9DA3BE`, 0.2),
//   },

//   typography,
// });

// Pink variant
//=============
// export const dark = createMuiTheme({
//   palette: {
//     background: {
//       default: "#18191A",
//       paper: "#242526",
//     },
//     primary: {
//       main: "#EA5B85",
//     },
//     text: {
//       primary: "#fafafa",
//       secondary: `#9DA3BE`,
//     },
//     divider: fade(`#9DA3BE`, 0.2),
//   },
//   typography,
// });

export const light = createMuiTheme({
  palette: {
    background: {
      default: "#f4f6f8",
      paper: "#ffffff",
    },
    primary: {
      main: colors.blue[600],
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
      main: colors.blue[600],
    },
    text: {
      primary: "#fafafa",
      secondary: `#9DA3BE`,
    },
    divider: fade(`#9DA3BE`, 0.2),
  },
  typography,
});
