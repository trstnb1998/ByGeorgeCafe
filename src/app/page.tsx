"use client"
import theme from "./theme";
import { ThemeProvider, CssBaseline, Box } from "@mui/material";

import NavBar from "@/_components_/core/Navbar";
import HeroSection from "@/_components_/core/HeroSection";
import Staples from "@/_components_/core/Staples";
import GallerySection from "@/_components_/core/GallerySection";
import Menu from "@/_components_/core/MenuSection";
import ProductSection from "@/_components_/core/RetailSection";
import InquiriesSection from "@/_components_/core/InquiriesSection";
import Map from "@/_components_/core/Map";

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
                <GallerySection />
                <Menu />
                <ProductSection />
                <InquiriesSection />
                <Map />
                <NavBar />
            </Box>
        </ThemeProvider >
    );
}