"use client"
import theme from "./theme";
import { ThemeProvider, CssBaseline } from "@mui/material";

import NavBar from "@/_components_/core/Navbar";
import HeroSection from "@/_components_/core/Hero";
export default function Home() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <NavBar />
            <HeroSection />
        </ThemeProvider>
    );
}