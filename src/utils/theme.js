import { createTheme } from '@mui/material/styles';

export const theme=createTheme({
    mode: 'dark',
    palette: {
        primary: {
            main: "#5785B6",
        },
        secondary: {
            main: "#5785B6"
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
            navbar: '#99CBE7'
        }
    },
});