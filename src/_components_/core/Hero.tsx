import { Typography, Box } from "@mui/material";
import HeroImages from "./HeroImages";
import WaveShape from "./WaveSVG";

export default function HeroSection() {
    return (
        <Box
            sx={{
                height: "864px",
                width: "100%",
                backgroundColor: "custom.beige",
                position: "relative",
                overflow: "hidden"
            }}
        >
            <Typography
                variant="h1"
                sx={{
                    textAlign: "center",
                    fontSize: "130px",
                    fontWeight: 400,
                    color: "custom.red",
                    borderRadius: "4px",
                    padding: "4px",
                    fontFamily: "Pacifico"
                }}>
                By George
            </Typography>
            <Box sx={{ paddingTop: 8 }}>
                <HeroImages />
            </Box>
            <Box sx={{ position: "absolute", bottom: 0, left: 0, right: 0 }}>
                <WaveShape color="white" />
            </Box>
        </Box>
    );
}