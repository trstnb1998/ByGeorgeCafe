import React from 'react'
import { Typography, Box } from '@mui/material';

export type MenuListItemComponentProperties = {
    item: string;
    description: string;
}
export default function MenuListItem({ item, description }: MenuListItemComponentProperties) {
    return (
        <>
            <Box>
                <Typography sx={{ fontSize: "18px", fontFamily: "Quicksand", fontWeight: 500, color: "custom.red" }}>{item}</Typography>
                <Typography sx={{ fontSize: "15px", fontFamily: "Quicksand", fontWeight: 300, color: "custom.red", marginBottom: "10px", whiteSpace: { xs: "normal", lg: "pre-wrap" } }}>{description}</Typography>
            </Box>
        </>
    )
}