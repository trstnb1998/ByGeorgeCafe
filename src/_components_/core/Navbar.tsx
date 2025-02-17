import { Typography, Box, List } from "@mui/material";
import { Link } from "react-scroll"; // Import Link from react-scroll
import NavListItem from "./NavListItem";

export type NavBarProps = {
    backgroundColor: string;
    textColor: string;
};

export default function NavBar({ backgroundColor, textColor }: NavBarProps) {
    return (
        <Box
            sx={{
                display: "flex",
                width: {
                    xs: "100%",
                },
                height: {
                    xs: "100px",
                    sm: "100px",
                    md: "70px",
                },
                backgroundColor: backgroundColor,
                alignItems: "center",
                flexDirection: {
                    xs: "column",
                    sm: "column",
                    md: "row",
                },
                color: textColor,
            }}
        >
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
                <List sx={{ display: "flex" }}>
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
