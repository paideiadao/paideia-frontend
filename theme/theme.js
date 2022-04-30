import { createTheme } from "@mui/material/styles";

export const LightTheme = createTheme({
  palette: {
    circle: {
      main: "#00868F",
    },
    tokenAlert: {
      main: "rgba(237, 108, 2, 1)",
    },
    circleBackground: {
      main: "rgba(0, 134, 143, 0.08)",
    },
    divider: {
      main: "rgb(51, 51, 51, .2)",
    },
    darkHover: {
      main: "rgba(255, 255, 255, 0.08)",
    },
    primary: {
      // light: will be calculated from palette.primary.main,
      main: "#00868F",
      light: "",
      text: "rgba(0, 0, 0, 1)",
      lightText: "rgba(0, 0, 0, 0.6)",
      selectedButton: "rgb(0, 134, 143, 0.1)",
      lightSuccess: "green",
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: "#00788C",
      main: "rgba(224, 104, 4, 1)",
      // dark: will be calculated from palette.secondary.main,
      contrastText: "#E5E5E5",
    },
    fileInput: {
      main: "rgb(0, 134, 143, 0.1)",
      outer: "white",
      border: "rgba(255, 255, 255, 1)",
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
    MuiCircularProgress: {
      styleOverrides: {},
    },
    MuiSelect: {
      styleOverrides: {
        icon: {
          color: "rgba(0, 0, 0, 0.6)",
        },
      },
    },
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
          fontSize: ".8rem",
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
    tokenAlert: {
      main: "rgba(255, 167, 38, 1)",
    },
    circleBackground: {
      main: "rgba(159, 210, 219, 0.08)",
    },
    searchIcon: {
      main: "#9FD2DB",
    },
    alert: {
      main: "linear-gradient(0deg, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)), #FFA726",
    },
    darkHover: {
      main: "rgba(17, 24, 39,.08)",
      text: "rgba(0, 0, 0, 1)",
    },
    divider: {
      main: "rgba(159, 210, 219, 0.2)",
    },
    fileInput: {
      main: "rgba(45, 51, 64, 1)",
      outer: "rgba(17, 24, 39, 1)",
      border: "rgba(255, 255, 255, 0.12)",
    },
    backgroundColor: {
      main: "rgba(17, 24, 39, 1)",
    },
    color: {
      main: "white",
    },
    primary: {
      // light: will be calculated from palette.primary.main,
      main: "#9FD2DB",
      light: "",
      text: "rgba(255, 255, 255, 1)",
      lightText: "rgba(255, 255, 255, 0.7)",
      selectedButton: "rgba(2, 136, 209, 0.1)",
      lightSuccess: "#66BB6A",
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: "#00788C",
      main: "rgba(224, 104, 4, 1)",
      // dark: will be calculated from palette.secondary.main,
      contrastText: "#333333",
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
    MuiSelect: {
      styleOverrides: {
        icon: {
          color: "rgba(255, 255, 255, 0.7)",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "rgba(255, 255, 255, 0.3)",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#9FD2DB",
          },
          color: "rgba(255, 255, 255, 1)",
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        root: {
          "&-track": {
            color: "rgba(255, 255, 255, 0.7)",
          },
        },
        track: {
          backgroundColor: "rgba(255, 255, 255, 0.7)",
        },
      },
    },
    MuiCalendarPicker: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(17, 24, 39, 1)",
          color: "white",
        },
      },
    },
    MuiPickersDay: {
      styleOverrides: {
        root: {
          color: "white",
          backgroundColor: "transparent",
        },
        selected: {
          backgroundColor: "#9FD2DB",
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          backgroundColor: "#191207",
          color: "#FFE2B7",
        },
        MuiAlert: {
          backgroundColor: "rgba(255, 167, 38, .8)",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        caption: {
          backgroundColor: "rgba(255, 255, 255, .9)",
          borderRadius: ".1rem",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          "&.Mui-disabled": {
            color: "rgba(255, 255, 255, 0.3)",
            backgroundColor: "rgba(255, 255, 255, 0.12)",
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: "rgba(255, 255, 255, 0.56)",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          "& .MuiAlert-Icon": {
            color: "green",
          },
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          color: "rgba(255, 255, 255, 0.8)",
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "rgba(255, 255, 255, 0.8)",
        },
      },
    },
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
