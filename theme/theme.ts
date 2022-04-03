import { createTheme } from "@mui/material/styles";

export const LightTheme = createTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: "#00868F",
      light: "",

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
                color: 'black',
            },
            label: {
                fontWeight: 500
            }
        }
    },
    MuiStepIcon: {
      styleOverrides: {
        root: {
          "&.Mui-completed": {
            color: "green",
          },
          "&.Mui-active": {
            color: "#00868F",
            '& text': {
                fill: 'white'
            }
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
    primary: {
      // light: will be calculated from palette.primary.main,
      main: "#1D1160",

      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: "#00788C",
      main: "#00788C",
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
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "#333333",
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          color: "#1D1160",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: "#333333",
        },
      },
    },
  },
});
