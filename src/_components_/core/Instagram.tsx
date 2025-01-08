import { Box } from "@mui/material"
import WaveShape2 from "./WaveSVG2"
import WaveShape3 from "./WaveSVG3"


export default function InstaSection() {
    return (
        <>
            <Box sx={{ overflow: "hidden", marginBottom: "-1px" }}>
                <WaveShape2 />
            </Box>
            <Box sx={{ height: "600px", width: "100%", backgroundColor: "custom.red" }}>

            </Box>
            <Box sx={{ overflow: "hidden", marginTop: "-2px" }}>
                <WaveShape3 />
            </Box>
        </>
    )
}