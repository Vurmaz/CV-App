import { createTheme, responsiveFontSizes  } from '@mui/material/styles';
let theme = createTheme({
  typography: {
    fontFamily: [
      'Nunito',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif'
    ].join(','),
  },
  palette: {
    primary: {
      main: '#4E9F3D',
      contrastText: '#fff',
    },
    secondary: {
      main: '#D8E9A8',
      contrastText: '#000',
    },
  },
});
theme = responsiveFontSizes(theme)
export { theme }