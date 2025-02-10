import React, { useState } from 'react'
import Image from 'next/image'
import { Box, Typography } from '@mui/material'
import fontLogo from "../../../public/images/fontLogo.png"

export type Product = {
    item: string;
    name: string;
    variation: string;
    price: string;
}

export type ProductInfoProps = {
    hoveredProduct: Product | null
}
export default function ProductInfo({ hoveredProduct }: ProductInfoProps) {
    return (
        <Box sx={{
            display: "flex",
            width: "310px",
            height: "730px",
            backgroundColor: "custom.white",
            marginTop: "5em",
            alignItems: "center",
            flexDirection: "column"
        }}>
            {/* Logo */}
            <Box sx={{ marginTop: "3em" }}>
                <Image src={fontLogo} alt="font logo" width={240} height={115} />
            </Box>

            {/* Product Info Box */}
            <Box
                sx={{
                    border: "1px dashed black",
                    width: 265,
                    height: 67,
                    borderRadius: "1em",
                    position: "relative",
                    marginTop: "3em",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center"
                }}
            >
                <Typography
                    sx={{
                        position: "absolute",
                        top: "-12px",
                        backgroundColor: "custom.white",
                        paddingX: "2em",
                        fontSize: "14px",
                        fontWeight: 600
                    }}
                >
                    ITEM
                </Typography>

                <Typography sx={{ fontSize: "16px", fontWeight: 500 }}>
                    {hoveredProduct ? hoveredProduct.item : "AVAILABLE IN STORE!"}
                </Typography>
            </Box>

            <Box sx={{ display: "flex", flexDirection: "column", width: 265, height: 230, marginTop: "70px", justifyContent: "space-between" }}>
                <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", borderBottom: "1px dashed black", paddingBottom: "1em" }}>
                    <Typography sx={{ fontWeight: 300 }}>Name</Typography>
                    <Typography sx={{ fontWeight: 300 }}>
                        {hoveredProduct ? hoveredProduct.name : "#######"}
                    </Typography>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", borderBottom: "1px dashed black", paddingBottom: "1em" }}>
                    <Typography sx={{ fontWeight: 300 }}>Variation</Typography>
                    <Typography sx={{ fontWeight: 300 }}>
                        {hoveredProduct ? hoveredProduct.variation : "###"}
                    </Typography>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", borderBottom: "1px dashed black", paddingBottom: "1em" }}>
                    <Typography sx={{ fontWeight: 300 }}>Price</Typography>
                    <Typography sx={{ fontWeight: 300 }}>
                        {hoveredProduct ? hoveredProduct.price : "####"}
                    </Typography>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", borderBottom: "1px dashed black", paddingBottom: "1em" }}>
                    <Typography sx={{ fontWeight: 300 }}>Vendor</Typography>
                    <Typography sx={{ fontWeight: 200 }}>
                        By George
                    </Typography>
                </Box>
            </Box>
            <Box sx={{ width: 265, marginTop: "20px" }}>
                <Box sx={{ borderBottom: "1px dashed black" }}>
                    <Typography sx={{ fontSize: "13px", fontWeight: 300 }}>MORE ITEMS AVAILABLE IN STORE</Typography>
                </Box>
                <Box sx={{ borderBottom: "1px dashed black", paddingY: "2px" }}>
                    <Typography sx={{ fontSize: "9px", fontWeight: 300 }}>117 Georges River Rd, Croydon Park NSW 2133</Typography>
                </Box>
                <Box sx={{ borderBottom: "1px dashed black" }}>
                    <Typography sx={{ fontSize: "13px", fontWeight: 300 }}>By George Cafe</Typography>
                </Box>
            </Box>
        </Box >
    )
}