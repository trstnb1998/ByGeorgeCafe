"use client"
import theme from "./theme";
import { ThemeProvider, CssBaseline, Box } from "@mui/material";

import NavBar from "@/_components_/core/Navbar";
import HeroSection from "@/_components_/core/Hero";
import Staples from "@/_components_/core/Staples";
export default function Home() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box sx={{
                display: "flex", width: "100svw", flexDirection: "column", flex: 1
            }}>
                <NavBar />
                <HeroSection />
                <Staples />
            </Box>
        </ThemeProvider >
    );
}