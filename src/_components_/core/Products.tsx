import React from 'react'

import { Box, Typography } from '@mui/material'
import Grid from '@mui/material/Grid2';
import Image from 'next/image'
import hotHoney from '/images/hot-honey.png';
import decafEspresso from '/images/decaf-espresso.png';
import pioneer from '/images/pioneer.png';
import chaiBlend from '/images/chai-blend.png';
import binoCup from '/images/bino-cup.png';
import caminoCup from '/images/camino-cup.png';
import dripper from '/images/dripper.png';
import dripperFilter from '/images/dripper-filter.png';

export default function Products() {

    const imageSize = {
        width: "100%",
        height: "100%"
    }

    const products = [
        {
            id: 1,
            item: "Quinby's Chilli Honey",
            name: "Quinby's Chilli Honey",
            variation: "200ml",
            price: "Price available on call",
            image: <Image src={hotHoney} alt="Hot Honey" style={imageSize} />
        },
        {
            id: 2,
            item: "P&R Mexico MW Decaf Espresso",
            name: "Mexico MW Decaf",
            variation: "250g/1kg",
            price: "Price available on call",
            image: <Image src={decafEspresso} alt="Decaf Espresso" style={imageSize} />
        },
        {
            id: 3,
            item: "P&R Pioneer Blend",
            name: "Pioneer",
            variation: "250g/1kg",
            price: "Price available on call",
            image: <Image src={pioneer} alt="Pioneer Coffee Blend" style={imageSize} />
        },
        {
            id: 4,
            item: "PRANA Chai Original Blend",
            name: "Chai Original Blend",
            variation: "250g/1kg",
            price: "Price available on call",
            image: <Image src={chaiBlend} alt="Chai Blend" style={imageSize} />
        },
        {
            id: 5,
            item: "FRESKO Bino Re-usable cup",
            name: "Bino cup",
            variation: "8oz",
            price: "Price available on call",
            image: <Image src={binoCup} alt="Bino Cup" style={imageSize} />
        },
        {
            id: 6,
            item: "FRESKO Camino Re-usable cup",
            name: "Camino cup",
            variation: "12oz",
            price: "Price available on call",
            image: <Image src={caminoCup} alt="Camino Cup" style={imageSize} />
        },
        {
            id: 7,
            item: "HARIO V60 Coffee Dripper",
            name: "V60 Coffee Dripper",
            variation: "Plastic",
            price: "Price available on call",
            image: <Image src={dripper} alt="V60 Coffee Dripper" style={imageSize} />
        },
        {
            id: 8,
            item: "HARIO V60 Coffee Dripper filter ",
            name: "V60 Coffee Dripper filter ",
            variation: "100 pc",
            price: "Price available on call",
            image: <Image src={dripperFilter} alt="V60 Coffee Dripper Filter" style={imageSize} />
        }
    ]

    return (
        <Grid container spacing={4} width={{ xs: "22rem", md: "870px" }} >
            {products.map((product) => (
                <Grid key={product.id} size={{ xs: 6, md: 3 }}>
                    <Box sx={{ flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                        <Box sx={{ textAlign: "center" }}>
                            {product.image}
                        </Box>
                        <Typography sx={{ textAlign: "center", color: "custom.white", marginTop: "1em" }}>{product.item}</Typography>
                    </Box>
                </Grid>
            ))}
        </Grid>
    )
}
