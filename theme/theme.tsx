import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    sm2: true;
    sm3: true;
    md: true;
    md2: true;
    lg: true;
    xl: true;
  }

  interface TypographyVariants {
    p: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    p?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    p: true;
  }
}

export const mainTheme = createTheme({
  typography: {
    fontFamily:
      '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif',
    // @ts-ignore
    p: {
      fontSize: "16px",
      marginBottom: "32px",
      display: "block",
      lineHeight: "24px",
      letterSpacing: "0.15px",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      sm2: 700,
      sm3: 800,
      md: 900,
      md2: 1000,
      lg: 1200,
      xl: 1536,
    },
  },
});

export const LightTheme = createTheme({
  ...mainTheme,
  palette: {
    circle: {
      main: "#00868F",
    },
    error: {
      main: "#F44336",
    },
    favoriteBackground: {
      main: "#FEE8E7",
    },
    text: {
      primary: "#000000",
      secondary: "#666666",
    },
    // @ts-ignore
    linkHover: {
      main: "#EBF5F6",
    },
    tokenAlert: {
      main: "#ed6c02",
    },
    circleBackground: {
      main: "#EBF6F6",
    },
    border: {
      main: "#D6D6D6",
    },
    darkHover: {
      main: "#FFFFFF",
    },
    backgroundColor: {
      main: "#FFFFFF",
    },
    primary: {
      // light: will be calculated from palette.primary.main,
      main: "#00868F",
      light: "#50B6BF",
      dark: "#005962",
      contrastText: "#FFFFFF",
      // @ts-ignore
      selectedButton: "#E5F3F4",
      lightSuccess: "#00A300",
      lightOpacity: "#EBF6F6",
      lightText: "blue",
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
      outer: "#FFFFFF",
      border: "FFFFFF",
      read: "#F0F5F6",
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    // contrastThreshold: 3,
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
    MuiSelect: {
      styleOverrides: {
        icon: {
          color: "#666666",
        },
      },
    },
    MuiStepLabel: {
      styleOverrides: {
        labelContainer: {
          color: "#000000",
        },
        label: {
          fontWeight: 500,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "& input:focus:focus-visible": {
            outline: 0,
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          "& input:focus:focus-visible": {
            outline: 0,
          },
        },
      },
    },
    MuiStepIcon: {
      styleOverrides: {
        root: {
          "&.Mui-completed": {
            color: "#00A300",
          },
          "&.Mui-active": {
            color: "#00868F",
            "& text": {
              fill: "#FFFFFF",
            },
          },

          color: "#FFF5ED",
        },
        text: {
          fill: "#E16804",
          fontSize: ".8rem",
        },
      },
    },
  },
});

export const DarkTheme = createTheme({
  ...mainTheme,
  palette: {
    mode: "dark",
    background: {
      default: "#0E1421",
      paper: "#0E1421",
    },
    error: {
      main: "#F44336",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#B8BABE",
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
      main: "rgba(17, 24, 39, 0.08)",
      text: "rgba(0, 0, 0, 1)",
    },
    border: {
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
      main: "#FFFFFF",
    },
    primary: {
      // light: will be calculated from palette.primary.main,
      main: "#9FD2DB",
      light: "#D1FFFF",
      dark: "#6FA1A9",
      // @ts-ignore
      selectedButton: "rgba(2, 136, 209, 0.1)",
      lightSuccess: "#66BB6A",
      lightOpacity: "rgba(159, 210, 219, 0.08)",
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
    // contrastThreshold: 3,
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
      backgroundColor: "#FFFF00",
    },
  },
  components: {
    MuiAccordion: {
      styleOverrides: {
        root: {
          backgroundColor: "transparent",
        },
      },
    },
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
        // @ts-ignore
        expandedIconWrapper: {
          backgroundColor: "#0000FF",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "rgba(255, 255, 255, 0.3)",
            outline: 0,
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#9FD2DB",
          },
          color: "FFFFFF",
          outline: 0,
          "& input:focus:focus-visible": {
            outline: 0,
          },
          "& textarea:focus:focus-visible": {
            outline: 0,
          },
        },
      },
    },
    // MuiInputBase: {
    //   styleOverrides: {
    //     root: {
    //       "& input:focus:focus-visible": {
    //         outline: 0,
    //       },
    //     }
    //   }
    // },
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
    // @ts-ignore
    MuiCalendarPicker: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(17, 24, 39, 1)",
          color: "#FFFFFF",
          "&Mui-Typography": {
            color: "#FFFFFF",
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
    MuiInputBase: {
      styleOverrides: {
        root: {
          "& input:focus:focus-visible": {
            outline: 0,
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
            color: "#00A300",
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
            color: "#FFFFFF",
          },
        },
        labelContainer: {
          color: "#FFFFFF",
        },
        label: {
          "&.Mui-completed": {
            color: "#FFFFFF",
          },
          "&.Mui-active": {
            color: "#FFFFFF",
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
              fill: "#FFFFFF",
            },
          },
          color: "rgba(252, 158, 79, 0.08)",
        },
        text: {
          fill: "rgba(255, 207, 126, 1)",
        },
      },
    },
  },
});
