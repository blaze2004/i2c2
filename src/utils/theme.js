import { createTheme } from '@mui/material/styles';

export const theme=createTheme({
    mode: 'dark',
    palette: {
        primary: {
            main: "#0093E9",
        },
        secondary: {
            main: "#00DEE2"
        },
        background: {
            default: "#000"
        },
        text: {
            primary: "#fff",
            secondary: '#c9c7c7'
        },
        neutral: {
            container: "#1C1B20",
            navbar: '#99CBE7',
            black: "#000"
        }
    },
});