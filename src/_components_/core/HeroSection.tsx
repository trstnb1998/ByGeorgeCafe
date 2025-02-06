import { Typography, Box } from "@mui/material";
import HeroImages from "./HeroImages";
import WaveShape from "./WaveSVG";

export default function HeroSection() {
    const waveMask = "radial-gradient(34.99px at 50% calc(100% - 48px),#000 99%,#0000 101%) calc(50% - 60px) 0/120px 100%, radial-gradient(34.99px at 50% calc(100% + 18px),#0000 99%,#000 101%) 50% calc(100% - 30px)/120px 100% repeat-x";
    return (
        <Box
            sx={{
                width: "100%",
                backgroundColor: "custom.beige",
                position: "relative",

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
                        xs: "1rem"
                    },
                    paddingBottom: {
                        xs: 4,
                        md: 8
                    }
                }}>
                By George
            </Typography>
            <HeroImages />
        </Box>
    );
}