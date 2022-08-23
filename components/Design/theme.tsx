import { createTheme } from "@mui/material";

//used to create custom theme
 export const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#0077b6',
            light: '#00b4d8',
            dark: '#00509d',
            contrastText: '#fff',
        },
        secondary: {
            main: '#7400b8',
            light: '#560bad',
            dark: '#3a0ca3',
            contrastText: '#fff',
        },
    }
})

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#1760a5',
            light: 'skyblue'
        },
        secondary: {
            main: '#15c630'
        },
    }
})