import { createTheme } from '@mui/material'

export const theme=createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: "#6B13FA",
        },
        secondary: {
            main: "#212332"
        },
        background: {
            default: "#2A2D3E"
        },
        text: {
            primary: {
                main: "#ffffff"
            },
            secondary: {
                main: '#999'
            }
        },
        neutral: {
            container: "#1C1B20"
        }
    },
});