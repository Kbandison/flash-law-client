import { createTheme } from "@mui/material/styles";
import { purple } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: purple[700],
    },
    secondary: {
      main: "#3f51b5",
    },
    error: {
      main: "#f44336",
    },
  },
});

export { theme };
