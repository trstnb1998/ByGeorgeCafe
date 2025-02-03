import { Typography, Box } from "@mui/material";
import Image from "next/image";

import doorDash from '@/_assets_/images/doorDash.png';
import uberEats from '@/_assets_/images/uberEats.png';
import Menu from "./Menu";

export default function MenuSection() {
    return (
        <>
            <Box sx={{ display: "flex", width: "90%", backgroundColor: "custom.beige", borderLeft: "1px solid #FF2D2D", borderRight: "1px solid #FF2D2D", marginX: "auto", flexDirection: "column", marginY: "-4rem", paddingBottom: "6rem", zIndex: "-1" }}>
                <Box sx={{ display: "flex", flexDirection: "row", justifyContent: { xs: "center", md: "space-between" }, alignItems: "center", width: "100%", paddingX: { xs: 0, md: "5em" }, marginTop: "8em" }}>
                    <Box sx={{ display: { xs: "none", md: "flex" } }}>
                        <Image src={uberEats} alt="Uber Eats" style={{ height: "84px", width: "84px" }} />
                    </Box>
                    <Typography sx={{ fontSize: { xs: "35px", md: "50px" }, fontWeight: 800, color: "custom.red", marginBottom: "1em" }}>FOOD MENU</Typography>
                    <Box sx={{ display: { xs: "none", md: "flex" } }}>
                        <Image src={doorDash} alt="Doordash" style={{ height: "84px", width: "84px" }} />
                    </Box>
                </Box>
                <Box>
                    <Menu />
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "column", lg: "row" },
                        alignItems: "center",
                        position: "relative",
                        width: "100%"
                    }}
                >
                    {/* Left-aligned text */}
                    <Typography
                        sx={{
                            whiteSpace: "pre-wrap",
                            fontFamily: "Quicksand",
                            fontSize: "15px",
                            fontWeight: 300,
                            color: "custom.red",
                            marginLeft: { md: 0, lg: "4rem" },
                            textAlign: { xs: "center", lg: "left" },
                            marginBottom: "1em",
                            marginTop: "2em"
                        }}
                    >
                        {"10% surcharge will be applied on weekends \n15% on holidays"}
                    </Typography>

                    {/* Centered text */}
                    <Typography
                        sx={{
                            fontFamily: "Quicksand",
                            fontSize: "15px",
                            fontWeight: 300,
                            color: "custom.red",
                            position: { lg: "absolute" },
                            left: { lg: "50%" },
                            transform: { lg: "translateX(-50%)" }, // Ensures true centering
                        }}
                    >
                        &copy; By George Coffee
                    </Typography>
                </Box>
            </Box >
        </>
    )
}
