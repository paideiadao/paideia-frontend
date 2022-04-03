import { createTheme } from "@mui/material/styles";

export const LightTheme = createTheme({
  palette: {
    circle: {
      main: "#00868F",
    },
    divider: {
      main: "rgba(159, 210, 219, 0.6)",
    },
    primary: {
      // light: will be calculated from palette.primary.main,
      main: "#00868F",
      light: "",
      text: "rgba(0, 0, 0, 0.6)",
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: "#00788C",
      main: "rgba(224, 104, 4, 1)",
      // dark: will be calculated from palette.secondary.main,
      contrastText: "#E5E5E5",
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
  components: {
    MuiStepLabel: {
      styleOverrides: {
        labelContainer: {
          color: "black",
        },
        label: {
          fontWeight: 500,
        },
      },
    },
    MuiStepIcon: {
      styleOverrides: {
        root: {
          "&.Mui-completed": {
            color: "green",
          },
          "&.Mui-active": {
            color: "#00868F",
            "& text": {
              fill: "white",
            },
          },

          color: "rgba(255, 130, 26, 0.08)",
        },
        text: {
          fill: "rgba(224, 104, 4, 1)",
        },
        active: {},
        completed: {},
      },
    },
  },
});

export const DarkTheme = createTheme({
  palette: {
    circle: {
      main: "#9FD2DB",
    },
    divider: {
      main: "rgba(159, 210, 219, 0.2)",
    },
    backgroundColor: {
      main: "rgba(17, 24, 39, 1)",
    },
    color: {
      main: "white",
    },
    primary: {
      // light: will be calculated from palette.primary.main,
      main: "#00868F",
      light: "",
      text: "rgba(255, 255, 255, 0.7)",
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: "#00788C",
      main: "rgba(224, 104, 4, 1)",
      // dark: will be calculated from palette.secondary.main,
      contrastText: "#E5E5E5",
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
  components: {
    MuiStepLabel: {
      styleOverrides: {
        root: {
          "&-label.Mui-completed": {
            color: "white",
          },
        },
        labelContainer: {
          color: "white",
        },
        label: {
          "&.Mui-completed": {
            color: "white",
          },
          "&.Mui-active": {
            color: "white",
          },
        },
      },
    },
    MuiStepIcon: {
      styleOverrides: {
        root: {
          "&.Mui-completed": {
            color: "#66BB6A",
          },
          "&.Mui-active": {
            color: "#00868F",
            "& text": {
              fill: "white",
            },
          },

          color: "rgba(252, 158, 79, 0.08)",
        },
        text: {
          fill: "rgba(255, 207, 126, 1)",
        },
        active: {},
        completed: {},
      },
    },
  },
});
