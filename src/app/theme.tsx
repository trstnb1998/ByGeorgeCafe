import { createTheme } from "@mui/material";

declare module '@mui/material/styles' {
    interface Theme {
        custom: {
            "red": string;
            "beige": string;
            "white": string;
            "black": string;
        };
    }

    interface CustomThemeDesignColors {
        custom: {
            "red": string;
            "beige": string;
            "white": string;
            "black": string;
        };
    }

    interface PaletteOptions {
        custom: {
            "red": string;
            "beige": string;
            "white": string;
            "black": string;
        };
    }
}

const theme = createTheme({
    "palette": {
        "custom": {
            "red": "#FF2D2D",
            "beige": "#FFF8E1",
            "white": "#FFFFFF",
            "black": "#181818"
        }
    },

    typography: {
        fontFamily: "Inter, Pacifico, Quicksand, Averia Serif Libre",
        "fontWeightLight": 400,
        "fontWeightRegular": 500,
        "fontWeightMedium": 600,
        "fontWeightBold": 700,
    }
})

export default theme;