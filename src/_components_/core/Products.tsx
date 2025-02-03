import React from 'react'

import { Box, Typography } from '@mui/material'
import Grid from '@mui/material/Grid2';
import Image from 'next/image'
import hotHoney from '@/_assets_/images/hotHoney.png';
import decafEspresso from '@/_assets_/images/decafEspresso.png';
import pioneer from '@/_assets_/images/pioneer.png';
import chaiBlend from '@/_assets_/images/chaiBlend.png';
import binoCup from '@/_assets_/images/binoCup.png';
import caminoCup from '@/_assets_/images/caminoCup.png';
import dripper from '@/_assets_/images/dripper.png';
import dripperFilter from '@/_assets_/images/dripperFilter.png';

export default function Products() {

    const products = [
        {
            id: 1,
            item: "Quinby's Chilli Honey",
            name: "Quinby's Chilli Honey",
            variation: "200ml",
            price: "Price available on call",
            image: <Image src={hotHoney} alt="Hot Honey" />
        },
        {
            id: 2,
            item: "P&R Mexico MW Decaf Espresso",
            name: "Mexico MW Decaf",
            variation: "250g/1kg",
            price: "Price available on call",
            image: <Image src={decafEspresso} alt="Decaf Espresso" />
        },
        {
            id: 3,
            item: "FRESKO Bino Re-usable cup",
            name: "Bino cup",
            variation: "8oz",
            price: "Price available on call",
            image: <Image src={binoCup} alt="Bino Cup" />
        },
        {
            id: 4,
            item: "FRESKO Camino Re-usable cup",
            name: "Camino cup",
            variation: "12oz",
            price: "Price available on call",
            image: <Image src={caminoCup} alt="Camino Cup" />
        },
        {
            id: 5,
            item: "P&R Pioneer Blend",
            name: "Pioneer",
            variation: "250g/1kg",
            price: "Price available on call",
            image: <Image src={pioneer} alt="Pioneer Coffee Blend" />
        },
        {
            id: 6,
            item: "PRANA Chai Original Blend",
            name: "Chai Original Blend",
            variation: "250g/1kg",
            price: "Price available on call",
            image: <Image src={chaiBlend} alt="Chai Blend" />
        },
        {
            id: 7,
            item: "HARIO V60 Coffee Dripper",
            name: "V60 Coffee Dripper",
            variation: "Plastic",
            price: "Price available on call",
            image: <Image src={dripper} alt="V60 Coffee Dripper" />
        },
        {
            id: 8,
            item: "HARIO V60 Coffee Dripper filter ",
            name: "V60 Coffee Dripper filter ",
            variation: "100 pc",
            price: "Price available on call",
            image: <Image src={dripperFilter} alt="V60 Coffee Dripper Filter" />
        }
    ]
    return (
        <>
            {/* <Box sx={{ width: "60%" }} >
                <Grid container spacing={2} direction={'row'} columns={2}>
                    {products.map((product) => (
                        <Grid key={product.id}>
                            <Box>
                                <Box sx={{ width: "auto", height: { xs: "190px", lg: "205px" } }}>
                                    {product.image}
                                </Box>
                                <Box sx={{ flexDirection: "row", width: "85%" }}>
                                    <Typography sx={{ textAlign: "center", color: "custom.white" }}>{product.item}</Typography>
                                </Box>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box > */}

            <Box sx={{ flexGrow: 1, width: "55em" }}>
                <Grid container spacing={2} columns={{ xs: 2, sm: 2, md: 4 }}>
                    {products.map((product) => (
                        <Grid key={product.id} size={{ md: 4 }}>
                            <Box sx={{ flexDirection: "column" }}>
                                <Box sx={{ width: "auto", height: { xs: "190px", lg: "205px" } }}>
                                    {product.image}
                                </Box>
                                <Box sx={{ width: "85%" }}>
                                    <Typography sx={{ textAlign: "center", color: "custom.white" }}>{product.item}</Typography>
                                </Box>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>
            {/* <Box sx={{ display: "flex", flexDirection: { xs: "column", lg: "row" }, gap: 2 }}>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                    <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
                        <Box sx={{ width: "auto", height: { xs: "190px", lg: "205px" } }}>
                            <Image src={hotHoney} alt="Hot Honey" style={{ height: "100%", width: "100%" }} />
                        </Box>
                        <Box sx={{ width: "auto", height: { xs: "190px", lg: "205px" } }}>
                            <Image src={decafEspresso} alt="Decaf Espresso" style={{ height: "100%", width: "100%" }} />
                        </Box>
                    </Box>

                    <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
                        <Box sx={{ width: "auto", height: { xs: "190px", lg: "205px" } }}>
                            <Image src={binoCup} alt="Bino Cup" style={{ height: "100%", width: "100%" }} />
                        </Box>
                        <Box sx={{ width: "auto", height: { xs: "190px", lg: "205px" } }}>
                            <Image src={caminoCup} alt="Camino Cup" style={{ height: "100%", width: "100%" }} />
                        </Box>
                    </Box>
                </Box>

                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                    <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
                        <Box sx={{ width: "auto", height: { xs: "190px", lg: "205px" } }}>
                            <Image src={pioneer} alt="Pioneer Blend" style={{ height: "100%", width: "100%" }} />
                        </Box>
                        <Box sx={{ width: "auto", height: { xs: "190px", lg: "205px" } }}>
                            <Image src={chaiBlend} alt="Chai Blend" style={{ height: "100%", width: "100%" }} />
                        </Box>
                    </Box>

                    <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
                        <Box sx={{ width: "auto", height: { xs: "190px", lg: "205px" } }}>
                            <Image src={dripper} alt="Coffee Dripper" style={{ height: "100%", width: "100%" }} />
                        </Box>
                        <Box sx={{ width: "auto", height: { xs: "190px", lg: "205px" } }}>
                            <Image src={dripperFilter} alt="Drip Filter" style={{ height: "100%", width: "100%" }} />
                        </Box>
                    </Box>
                </Box>
            </Box > */}
        </>
    )
}
