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
            default: "#101825"
        },
        text: {
            primary: "#fff",
            secondary: '#999'
        },
        neutral: {
            container: "#1C1B20",
            navbar: '#99CBE7',
            black: "#000"
        }
    },
});