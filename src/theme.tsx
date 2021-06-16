import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#010066",
            dark : "#000000",
            light: "#FFFFFF"
        },
        secondary: {
            main: "#CC0001",
        },
        background: {
            default: "#ffffff"
        },
    }, typography: {
        "fontWeightLight": 700,
        "fontWeightRegular": 400,
        "fontWeightMedium": 500,
        subtitle1: {
            fontSize: 18
        }
    }
})

export default theme;