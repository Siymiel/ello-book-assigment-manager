import { createTheme } from "@mui/material";

const theme = createTheme({
    typography: {
        fontFamily: 'Mulish, sans-serif',
    },
    palette: {
        primary: {
            main: '#5ACCCC',
        },
        secondary: {
            main: '#CFFAFA',
        },
        common: {
            white: '#FFFFFF',
        }
        
    }
});

export default theme;