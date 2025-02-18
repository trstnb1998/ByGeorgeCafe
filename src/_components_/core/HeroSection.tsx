import { Typography, Box } from "@mui/material";
import HeroImages from "./HeroImages";
import WaveShape from "./WaveSVG";

export default function HeroSection() {
    const waveMask = "radial-gradient(circle, rgba(0,0,0,1) 100%, rgba(0,0,0,0) 100%)";

    return (
        <Box
            sx={{
                width: "100%",
                backgroundColor: "custom.beige",
                position: "relative",
                overflowX: "hidden",

                "--mask": waveMask,
                "webkitMask": waveMask,
                "mask": waveMask,
            }}
        >
            <Typography
                variant="h1"
                sx={{
                    textAlign: "center",
                    fontSize: {
                        xs: "50px",
                        sm: "76px",
                        md: "130px",
                    },
                    fontWeight: {
                        xs: 800,
                        md: 400
                    },
                    color: "custom.red",
                    borderRadius: "4px",
                    padding: "4px",
                    fontFamily: {
                        xs: "Inter",
                        md: "Pacifico"
                    },
                    textTransform: {
                        xs: "uppercase",
                        md: "none"
                    },
                    marginTop: {
                        xs: "8rem",
                        md: "6rem"
                    },
                    paddingBottom: {
                        xs: 4,
                        md: 8
                    }
                }}>
                By George
            </Typography>
            <HeroImages />
            <Box sx={{
                marginTop: "-2px",
                overflow: "hidden",
            }}>
                <WaveShape />
            </Box>
        </Box>
    );
}