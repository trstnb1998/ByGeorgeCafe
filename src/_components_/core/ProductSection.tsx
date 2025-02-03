import React from 'react'
import { Typography, Box } from '@mui/material'
import WaveShape2 from './WaveSVG2'
import WaveShape3 from './WaveSVG3'
import ProductInfoSVG from './ProductInfoSVG'
import Products from './Products'

export default function ProductSection() {
    return (
        <>
            <Box sx={{ marginBottom: "-2px", overflow: "hidden" }}>
                <WaveShape2 />
            </Box>

            <Box sx={{ display: "flex", width: "100%", backgroundColor: "custom.red", alignItems: "center", flexDirection: "column", paddingX: "1em" }}>
                <Box sx={{
                    width: { xs: "353px" },
                    height: "60px",
                    backgroundColor: "custom.white",
                    borderRadius: "10px",
                    border: "1px solid white",
                    boxShadow: "4px 4px 4px 0px rgba(0, 0, 0, 0.25) inset",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "1em",
                    marginBottom: "2em"
                }}>
                    <Typography sx={{
                        color: "custom.red", fontSize: { xs: "30px" }, fontWeight: 800, textDecorationLine: "underline"
                    }}>
                        Merch & Products
                    </Typography>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <Products />
                </Box>
            </Box >

            <Box sx={{ marginTop: "-2px", overflow: "hidden" }}>
                <WaveShape3 />
            </Box>

        </>
    )
}
