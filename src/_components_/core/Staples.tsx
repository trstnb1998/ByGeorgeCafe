import { Typography, Box } from "@mui/material"
import Image from "next/image"

import bagel from '@/_assets_/images/bagel.png';
import cookies from '@/_assets_/images/cookies.png';
import sandwich from '@/_assets_/images/sandwich.png';

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
                    paddingTop: "1rem"
                }}>
                    STAPLES
                </Typography>

                <Box sx={{
                    display: "flex",
                    flexDirection: {
                        xs: "column",
                    },
                    margin: "0 auto",
                    maxWidth: "80%",
                    alignItems: "center",
                    textAlign: "center"
                }}>
                    <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center", width: "40%" }}>
                        <Typography>Bagels</Typography>
                        <Typography>Brooklyn Boy Bagels with several variations, including cream-cheese, salmon and various other signature bagels. Our bagels are a must-try for any bagel enthusiast.</Typography>
                        <Image src={bagel} alt="bagel" />
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center", width: "40%" }}>
                        <Typography>Cookies</Typography>
                        <Typography>Freshly baked Butterboy cookies with flavours like double choc chip, gluten free fudge, and much more. Perfect to pair with that morning coffee.</Typography>
                        <Image src={cookies} alt="cookies" />
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center", width: "40%" }}>
                        <Typography>Sandwiches</Typography>
                        <Typography>Our signature sandwiches feature classics such as the Reuben and schnitzel, alongside a variety of other distinctive offerings. Our versatile selection, ensures there is something to satisfy every palate</Typography>
                        <Image src={sandwich} alt="sandwich" />
                    </Box>
                </Box>
            </Box>
        </>
    )
}