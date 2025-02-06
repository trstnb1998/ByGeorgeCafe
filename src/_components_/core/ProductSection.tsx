import React from 'react'
import { Typography, Box } from '@mui/material'
import WaveShape2 from './WaveSVG2'
import WaveShape3 from './WaveSVG3'
import ProductInfo from './ProductInfo'
import Products from './Products'

export default function ProductSection() {
    return (
        <>
            <Box sx={{ marginBottom: "-2px", overflow: "hidden" }}>
                <WaveShape2 />
            </Box>
            <Box sx={{ display: "flex", width: "100%", backgroundColor: "custom.red", alignItems: "center", justifyContent: "center", flexDirection: { xs: "column-reverse", lg: "row" }, paddingX: "1em" }}>
                <ProductInfo />
                <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", marginLeft: { xs: 0, md: "5%" } }}>
                    <Box sx={{
                        width: "100%",
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
                    <Products />
                </Box>
            </Box>
            <Box sx={{ marginTop: "-2px", overflow: "hidden" }}>
                <WaveShape3 />
            </Box>
        </>
    )
}