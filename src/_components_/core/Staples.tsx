import { Typography, Box } from "@mui/material"
import Image from "next/image"

import bagel from '../../../public/images/bagel.png';
import cookies from '../../../public/images/cookies.png';
import sandwich from '../../../public/images/sandwich.png';

export default function Staples() {
    return (
        <>
            <Box sx={{
                display: "flex",
                width: "100%", flexDirection: "column", justifyContent: "center", alignItems: "center"
            }}>
                <Typography variant="h2" sx={{
                    fontFamily: "Inter, sans-serif",
                    textAlign: "center",
                    fontSize: "55px",
                    fontWeight: 800,
                    color: "custom.red",
                    paddingTop: "1rem",
                    marginBottom: "5rem"
                }}>
                    STAPLES
                </Typography>

                <Box sx={{
                    display: "flex",
                    flexDirection: {
                        xs: "column",
                        lg: "row"
                    },
                    margin: "0 auto",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    paddingBottom: "7rem"
                }}>
                    <Box sx={{ display: "flex", flexDirection: "column", position: "relative", alignItems: "center", width: { xs: "364px", lg: "30%" }, borderLeft: "1px solid red", borderRight: { xs: "1px solid red", lg: 0 }, height: "550px", gap: 4, marginTop: { xs: "7rem", lg: 0 }, order: { xs: 3, lg: 1 } }}>
                        <Typography sx={{ fontFamily: "Averia Serif Libre", fontWeight: 300, fontSize: "48px", order: { xs: 1, lg: 1 } }}>Bagels</Typography>
                        <Typography sx={{ order: { xs: 3, lg: 2 }, color: "custom.gray", textAlign: { xs: "center", lg: "left" }, paddingRight: "16px", paddingLeft: "16px" }}><a href="https://www.brooklynboy.com.au/" target="_blank" style={{ color: "inherit" }}>Brooklyn Boy Bagels</a> with several variations, including cream-cheese, salmon and various other signature bagels. Our bagels are a must-try for any bagel enthusiast.</Typography>
                        <Box sx={{ order: { xs: 2, lg: 3 }, position: "absolute", bottom: 0, left: 0 }}>
                            <Image src={bagel} alt="bagel" />
                        </Box>
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", width: { xs: "364px", lg: "30%" }, borderLeft: "1px solid red", borderRight: { xs: "1px solid red", lg: 0 }, height: "550px", gap: 4, order: { xs: 1, lg: 2 } }}>
                        <Typography sx={{ fontFamily: "Averia Serif Libre", fontWeight: 300, fontSize: "48px", order: { xs: 1, lg: 2 } }}>Cookies</Typography>
                        <Typography sx={{ order: { xs: 3 }, color: "custom.gray", paddingRight: "16px", paddingLeft: "16px" }}>Freshly baked <a href="https://www.butterboy.com.au/shop-cookies" target="_blank" style={{ color: "inherit" }}>Butterboy</a> cookies with flavours like double choc chip, gluten free fudge, and much more. Perfect to pair with that morning coffee.</Typography>
                        <Box sx={{ order: { xs: 2, lg: 1 } }}>
                            <Image src={cookies} alt="cookies" />
                        </Box>
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "column", position: "relative", alignItems: "center", width: { xs: "364px", lg: "30%" }, borderLeft: "1px solid red", borderRight: "1px solid red", height: "550px", gap: 4, marginTop: { xs: "7rem", lg: 0 }, order: { xs: 2, lg: 3 } }}>
                        <Typography sx={{ fontFamily: "Averia Serif Libre", fontWeight: 300, fontSize: "48px", order: { xs: 1, lg: 1 } }}>Sandwiches</Typography>
                        <Typography sx={{ order: { xs: 3, lg: 2 }, color: "custom.gray", textAlign: { xs: "center", lg: "right" }, paddingRight: { xs: "20px", lg: "16px" }, paddingLeft: { xs: "20px", lg: "24px" } }}>Our signature sandwiches feature classics such as the Reuben and schnitzel, alongside a variety of other distinctive offerings. Our versatile selection, ensures there is something to satisfy every palate</Typography>
                        <Box sx={{ order: { xs: 2, lg: 3 }, position: "absolute", bottom: 0, right: "-2px" }}>
                            <Image src={sandwich} alt="sandwich" />
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
} 