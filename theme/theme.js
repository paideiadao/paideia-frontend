import { createTheme } from "@mui/material/styles";
import darkScrollbar from "@mui/material/darkScrollbar";

export const LightTheme = createTheme({
  palette: {
    circle: {
      main: "#00868F",
    },
    error: {
      main: '#F44336'
    },
    favoriteBackground: {
      main: "#FEE8E7",
    },
    text: {
      main: "black",
      light: "#666666",
    },
    linkHover: {
      main: "#EBF5F6",
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
    backgroundColor: {
      main: "#FFFFFF",
    },
    primary: {
      // light: will be calculated from palette.primary.main,
      main: "#00868F",
      light: "#50B6BF",
      dark: "#005962",
      contrast: "#FFFFFF",
      selectedButton: "rgb(0, 134, 143, 0.1)",
      lightSuccess: "green",
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      main: "#FF8219",
      light: "#FFB333",
      dark: "#E06804",
      // dark: will be calculated from palette.secondary.main,
      contrastText: "#FFFFFF",
    },
    fileInput: {
      main: "#F5F5F5",
      outer: "white",
      border: "rgba(255, 255, 255, 1)",
      read: "#F0F5F6",
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
    MuiChip: {
      styleOverrides: {
        icon: {
          color: "inherit",
        },
      },
    },
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
    MuiCssBaseline: {
      styleOverrides: {
        body: null,
      },
    },
  },
});

export const DarkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#0E1421",
      paper: "#0E1421",
    },
    error: {
      main: '#F44336'
    },
    text: {
      main: "white",
      light: "#B8BABE",
    },
    circle: {
      main: "#9FD2DB",
    },
    linkHover: {
      main: "rgba(159, 210, 219, 0.16)",
    },
    tokenAlert: {
      main: "rgba(255, 167, 38, 1)",
    },
    favoriteBackground: {
      main: "#FEE8E7",
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
      read: "#1C2735",
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
      light: "#D1FFFF",
      dark: "#6FA1A9",
      selectedButton: "rgba(2, 136, 209, 0.1)",
      lightSuccess: "#66BB6A",
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: "#FFCF7E",
      main: "#FC9E4F",
      dark: "ED7E21",
      // dark: will be calculated from palette.secondary.main,
      contrastText: "#000000",
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
  addButton: {
    margin: 0,
    top: "auto",
    right: 20,
    bottom: 20,
    left: "auto",
    position: "fixed",
    color: "primary",
    zIndex: 20,
    backgroundColor: "red",
    "&:hover": {
      backgroundColor: "yellow",
    },
  },
  components: {
    MuiChip: {
      styleOverrides: {
        icon: {
          color: "inherit",
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        icon: {
          color: "rgba(255, 255, 255, 0.7)",
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        expandedIconWrapper: {
          backgroundColor: "blue",
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
          "&Mui-Typography": {
            color: "white",
          },
        },
      },
    },
    MuiPickersDay: {
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            backgroundColor: "#9FD2DB",
          },
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          warning: {
            backgroundColor: "#191207",
            color: "#FFE2B7",
          },
        },
        MuiAlert: {
          warning: {
            backgroundColor: "rgba(255, 167, 38, .8)",
          },
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
    MuiTypography: {
      styleOverrides: {
        root: {
          color: "white",
        },
        caption: {
          color: "white",
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
    // MuiCssBaseline: {
    //   styleOverrides: {
    //     body: darkScrollbar(),
    //   },
    // },
  },
});
