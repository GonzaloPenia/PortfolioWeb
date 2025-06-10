import { createTheme } from '@mui/material';
import { red } from '@mui/material/colors';

export const darkTheme = createTheme({
      palette: {
            mode: 'dark',
            primary: {
                  main: '#303030'
            },
            secondary: {
                  main: '#5a5a5a'
            },
            error: {
                  main: red.A400
            }
      }
});