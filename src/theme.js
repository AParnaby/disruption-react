import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
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
      secondary: '#f5f5f5',
    },
    background: {
      default: '#f5f5f5',
      paper: '#ffffff',
    },
  },
});

export default theme;