"use client";
import theme from "./theme";
import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import { Element } from "react-scroll";
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
            <Box>
                <NavBar backgroundColor="custom.red" textColor="custom.white" position="fixed" enableOpacity={true} enableBoxShadow={true} scrolledTextColor="custom.white" isPrimary={true}/>

                <Element name="hero">
                    <HeroSection />
                </Element>

                <Element name="staples">
                    <Staples />
                </Element>

                <Element name="gallery">
                    <GallerySection />
                </Element>

                <Element name="menu">
                    <Menu />
                </Element>

                <Element name="products">
                    <ProductSection />
                </Element>

                <Element name="inquiries">
                    <InquiriesSection />
                </Element>

                <Element name="contact">
                    <Map />
                </Element>

                <NavBar backgroundColor="custom.beige" textColor="custom.red" position="relative" scrolledTextColor="custom.red" />
            </Box>
        </ThemeProvider>
    );
}