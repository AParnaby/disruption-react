import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  overrides: {
    MuiOutlinedInput: {
      root: {
        "&$focused $notchedOutline": {
          borderWidth: "2px",
          borderColor: "#5d001e",
        },
      },
      focused: {},
      notchedOutline: {},
    },
    MuiSelect: {
      icon: {
        color: "#5d001e",
      },
      selectMenu: {
        backgroundColor: "white",
      },
    },
  },
  palette: {
    primary: {
      main: '#800000',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#87cefa',
      contrastText: '#444444',
    },
    text: {
      primary: '#444444',
      secondary: '#800000',
    },
    background: {
      default: '#f5f5f5',
      paper: '#ffffff',
    },
  },
});

export default theme;