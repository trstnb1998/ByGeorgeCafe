import { useState, useEffect } from "react";
import { Typography, Box, List } from "@mui/material";
import { Link } from "react-scroll";
import NavListItem from "./NavListItem";

export type NavBarProps = {
    backgroundColor: string;
    textColor: string;
    scrolledTextColor: string; // New prop for text color on scroll
    position: string;
    enableOpacity?: boolean; // Optional opacity effect
    enableBoxShadow?: boolean; // Optional shadow effect
};

export default function NavBar({
    backgroundColor,
    textColor,
    scrolledTextColor,
    position,
    enableOpacity = false,
    enableBoxShadow = false,
}: NavBarProps) {
    const [opacity, setOpacity] = useState(1);
    const [boxShadow, setBoxShadow] = useState("none");
    const [currentTextColor, setCurrentTextColor] = useState(textColor);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;

            if (enableOpacity) {
                setOpacity(scrollY > 50 ? 0.2 : 1);
            }

            if (enableBoxShadow) {
                setBoxShadow(scrollY > 50 ? "inset 0px 65px 50px rgba(74, 0, 0, 0.9)" : "none");
            }

            setCurrentTextColor(scrollY > 50 ? scrolledTextColor : textColor);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [enableOpacity, enableBoxShadow, textColor, scrolledTextColor]);

    return (
        <Box
            sx={{
                display: "flex",
                width: "100%",
                height: {
                    xs: "100px",
                    sm: "100px",
                    md: "70px",
                },
                position: position,
                alignItems: "center",
                flexDirection: {
                    xs: "column",
                    sm: "column",
                    md: "row",
                },
                zIndex: 2,
                transition: "box-shadow 0.3s ease-in-out, color 0.3s ease-in-out",
            }}
        >
            {/* Background Box with opacity */}
            <Box
                sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: backgroundColor,
                    opacity: enableOpacity ? opacity : 1, // Apply opacity only if enabled
                    zIndex: -1, // Ensure it's behind the text
                    boxShadow: enableBoxShadow ? boxShadow : "none",
                    transition: "opacity 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                }}
            ></Box>

            <Box>
                <Typography
                    sx={{
                        fontSize: "18px",
                        fontFamily: "Pacifico",
                        paddingLeft: {
                            xs: 0,
                            sm: 0,
                            md: "4rem",
                        },
                        marginTop: {
                            xs: "1rem",
                            sm: "1rem",
                            md: 0,
                        },
                        color: currentTextColor, // Apply dynamic text color
                    }}
                >
                    B.G.
                </Typography>
            </Box>

            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    flexGrow: 1,
                    paddingRight: {
                        xs: 0,
                        sm: 0,
                        md: "4rem",
                    },
                }}
            >
                <List sx={{ display: "flex", color: currentTextColor }}>
                    <Link to="hero" smooth={true} duration={500}>
                        <NavListItem title="Home" />
                    </Link>
                    <Link to="gallery" smooth={true} duration={500}>
                        <NavListItem title="Gallery" />
                    </Link>
                    <Link to="menu" smooth={true} duration={500}>
                        <NavListItem title="Menu" />
                    </Link>
                    <Link to="products" smooth={true} duration={500}>
                        <NavListItem title="Retail" />
                    </Link>
                    <Link to="inquiries" smooth={true} duration={500}>
                        <NavListItem title="Inquiries" />
                    </Link>
                    <Box
                        sx={{
                            display: {
                                xs: "none",
                                sm: "none",
                                md: "flex",
                            },
                        }}
                    >
                        <Link to="contact" smooth={true} duration={500}>
                            <NavListItem title="Contact" />
                        </Link>
                    </Box>
                </List>
            </Box>
        </Box>
    );
}
