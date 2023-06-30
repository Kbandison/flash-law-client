import { createTheme } from "@mui/material/styles";

/* Light Theme
Background: #5F4321 (brown)
button1: #F2C72B (yellow)
button2: #830163 (purple)
*/

/* Dark Theme
Background: #5F4321 (brown)
button1: #F2C72B (yellow)
button2: #830163 (purple)
*/

/* Possible Theme
Background: #0F0B06 (brown)
button: #F2C72B (yellow)
*/

const theme = createTheme({
  palette: {
    // mode: "dark",
    // JUST A TEST OF WHAT CONTROLS WHAT
    text: {
      primary: "#830163",
      secondary: "#BB6447",
      disabled: "#F2C72B",
    },
    action: {
      active: "#830163",
      hover: "#830163",
      selected: "#830163",
      disabled: "#F2C72B",
      disabledBackground: "#F2C72B",
      focus: "#830163",
    },
    background: {
      default: "#0F0B06",
      // paper: "#830163",
    },
    divider: "#5F4321",
    primary: {
      main: "#F2C72B",
    },
    // secondary: {
    //   main: "#0F0B06",
    // },
    error: {
      main: "#f44336",
    },
  },
  typography: {
    fontFamily: "Roboto",
  },
});

export { theme };
