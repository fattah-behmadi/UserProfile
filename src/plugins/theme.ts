import { createTheme } from "@mui/material/styles";

let theme = createTheme({
  direction: "rtl",

  // color palette
  palette: {
    // background: {
    //   background: "#EBEBEB",
    // },
    primary: {
      light: "#E8EAFA",
      main: "#4763E4",
      dark: "#4763E2",
      contrastText: "#fff",
    },
  },

  // typography ( font-family - size ...)
  typography: {
    allVariants: {
      fontFamily: "Estedad",
    },
  },

  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: ".75rem",
        },
      },
    },

    // applied to the <ul> element
    MuiList: {
      styleOverrides: {
        root: {
          padding: "8px 12px",
        },
      },
    },
    // Applied to the <li> elements
    MuiMenuItem: {
      styleOverrides: {
        root: ({ theme }) => ({
          padding: "7px",
          "&.Mui-selected": {
            backgroundColor: theme.palette.primary.main,
            color: "#000",
            borderRadius: ".75rem",
          },
          "&:hover": {
            backgroundColor: theme.palette.primary.light,
            borderRadius: ".75rem",
          },
        }),
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }) => ({
          height: "56px",
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.primary.main,
          },
        }),
      },
    },
  },
});
export default theme;
