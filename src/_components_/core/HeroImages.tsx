import { Box } from '@mui/material';
import Image from 'next/image';

import byGeorgeMascot from '@/_assets_/images/byGeorgeMascot.png';
import holdCoffee from '@/_assets_/images/holdCoffee.png';
import doorDash from '@/_assets_/images/doorDash.png';
import uberEats from '@/_assets_/images/uberEats.png';
import igButton from '@/_assets_/images/igButton.png';
import fbButton from '@/_assets_/images/fbButton.png';
import tikTokButton from '@/_assets_/images/tikTokButton.png';


export default function HeroImages() {

    // const imageStyle = { boxShadow: "4px 4px 8px #000", borderRadius: "15px" };

    return (
        <>
            <Box sx={{ position: "relative" }}>
                <Box sx={{ position: "absolute", top: 0, left: 0, right: 0, textAlign: "center", marginTop: 3.5 }}>
                    <Image src={holdCoffee} alt="holdCoffee" height={575} />
                </Box>
                <Box sx={{ display: "flex", gap: "53px", marginLeft: "53px" }}>
                    {Array.from({ length: 32 }, (_, index) => (
                        <Image key={index} src={byGeorgeMascot} alt="By George Mascot" />
                    ))}
                </Box>
                <Box sx={{ display: "flex", gap: "53px" }}>
                    {Array.from({ length: 32 }, (_, index) => (
                        <Image key={index} src={byGeorgeMascot} alt="By George Mascot" />
                    ))}
                </Box>
                <Box sx={{ display: "flex", gap: "53px", marginLeft: "53px" }}>
                    {Array.from({ length: 32 }, (_, index) => (
                        <Image key={index} src={byGeorgeMascot} alt="By George Mascot" />
                    ))}
                </Box>
                <Box sx={{ display: "flex", gap: "53px" }}>
                    {Array.from({ length: 32 }, (_, index) => (
                        <Image key={index} src={byGeorgeMascot} alt="By George Mascot" />
                    ))}
                </Box>
            </Box>

            <Box sx={{ display: "flex", flexDirection: "column", paddingTop: "4em", paddingLeft: "64px" }}>
                <Image src={uberEats} alt="Uber Eats" />
                <Image src={doorDash} alt="Door Dash" style={{ marginLeft: "6em", marginTop: "-20px" }} />
            </Box>

            <Box gap={2} sx={{ display: "flex", justifyContent: "flex-end", paddingRight: "64px", marginTop: "-4em" }}>
                <Image src={tikTokButton} alt="Tik Tok" />
                <Image src={fbButton} alt="Facebook" />
                <Image src={igButton} alt="Instagram" />
            </Box>
        </>
    )
}