"use client"
import NavBar from "@/_components_/core/Navbar";
import theme from "./theme";
import { ThemeProvider, CssBaseline } from "@mui/material";

export default function Home() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <NavBar />
        </ThemeProvider>
    );
}