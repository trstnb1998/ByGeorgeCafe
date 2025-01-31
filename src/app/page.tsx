"use client"
import theme from "./theme";
import { ThemeProvider, CssBaseline, Box } from "@mui/material";

import NavBar from "@/_components_/core/Navbar";
import HeroSection from "@/_components_/core/Hero";
import Staples from "@/_components_/core/Staples";
import InstaSection from "@/_components_/core/Instagram";
import Menu from "@/_components_/core/MenuSection";

export default function Home() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box sx={{
                display: "flex", width: "100svw", flexDirection: "column"
            }}>
                <NavBar />
                <HeroSection />
                <Staples />
                <InstaSection />
                <Menu />
            </Box>
        </ThemeProvider >
    );
}