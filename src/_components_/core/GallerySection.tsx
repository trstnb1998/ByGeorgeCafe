import { Box, Typography } from "@mui/material"
import Image from "next/image";
import WaveShape2 from "./WaveSVG2"
import WaveShape3 from "./WaveSVG3"
import pourCoffee from "../../../public/images/pourCoffee.png"
import pastry1 from '../../../public/images/pastry1.png';
import pastry2 from '../../../public/images/pastry2.png';
import cookie from '../../../public/images/cookie.png';

import SocialButtons from "./SocialButtons";

export default function GallerySection() {
    return (
        <>
            <Box sx={{
                overflow: "hidden",
                marginBottom: "-2px",
                width: "100%"
            }}>
                <WaveShape2 />
            </Box>
            <Box sx={{ display: "flex", flexDirection: { xs: "column", lg: "row" }, height: { xs: "1375px", lg: "600px" }, width: "100%", backgroundColor: "custom.red", justifyContent: "center", alignItems: "center" }}>
                <Box sx={{ lineHeight: "95px" }}>
                    <Typography sx={{ fontSize: "70px", fontWeight: 800, color: "custom.white", marginRight: "140px", lineHeight: "11rem", display: { xs: "none", lg: "flex" } }}>HELLO, <br />GOOD<br />THANKS!</Typography>
                </Box>
                <Box sx={{ display: "flex", flexDirection: { xs: "column", lg: "column-reverse" } }}>
                    <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, padding: "30px", backgroundColor: "custom.beige", width: "fit-content", height: "fit-content", borderRadius: "20px", boxShadow: "4px 4px 4px 0px rgba(0, 0, 0, 0.25) inset" }}>
                        <Box sx={{ display: "flex", flexDirection: { xs: "column", lg: "row" }, gap: "28px" }}>
                            <Box sx={{ width: { xs: "240px", lg: "182px" }, height: { xs: "240px", lg: "182px" }, backgroundColor: "#E0AFEF", boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.3)" }}>
                                <Image src={pourCoffee} alt="pourCoffee" style={{ height: "100%", width: "auto" }} />
                            </Box>
                            <Box sx={{ width: { xs: "240px", lg: "182px" }, height: { xs: "240px", lg: "182px" }, backgroundColor: "#FFB8CA", boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.3)" }}>
                                <Image src={pastry1} alt="pastry1" style={{ height: "100%", width: "100%" }} />
                            </Box>
                            <Box sx={{ width: { xs: "240px", lg: "182px" }, height: { xs: "240px", lg: "182px" }, backgroundColor: "#FFE28A", boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.3)" }}>
                                <Image src={pastry2} alt="pastry2" style={{ height: "100%", width: "auto" }} />
                            </Box>
                            <Box sx={{ width: { xs: "240px", lg: "182px" }, height: { xs: "240px", lg: "182px" }, backgroundColor: "#8DFFDD", boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.3)" }}>
                                <Image src={cookie} alt="cookie" style={{ height: "100%", width: "auto" }} />
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: { xs: "column", lg: "row" }, alignItems: "center", justifyContent: "space-between", marginRight: "5px", marginBottom: "25px" }}>
                        <Typography sx={{ marginTop: "48px", color: "custom.white", fontSize: { xs: "25px", lg: "50px" }, fontWeight: 600 }}>
                            @ByGeorgeCoffee
                        </Typography>

                        <Box sx={{ marginTop: "48px", paddingTop: { xs: 0, lg: "10px" } }}>
                            <SocialButtons />
                        </Box>
                    </Box>
                </Box>
            </Box >
            <Box sx={{
                marginTop: "-2px",
                overflow: "hidden"
            }}>
                <WaveShape3 />
            </Box>
        </>
    )
}