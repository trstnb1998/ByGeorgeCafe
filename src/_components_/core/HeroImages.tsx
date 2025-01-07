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
        <Box sx={{
            display: "flex",
            paddingTop: 8,
            flexDirection: {
                xs: "column-reverse",
                sm: "column"
            }
        }}>
            <Box>
                <Box sx={{ position: "relative" }}>
                    <Box sx={{ position: "absolute", bottom: -10, marginTop: 3.5, justifyContent: "center" }}>
                        <Image src={holdCoffee} alt="holdCoffee" style={{ height: 525, width: 522 }} />
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
                    <Box sx={{
                        display: {
                            xs: "flex",
                            sm: "none"
                        },
                        gap: "53px",
                        marginLeft: "53px"
                    }}>
                        {Array.from({ length: 32 }, (_, index) => (
                            <Image key={index} src={byGeorgeMascot} alt="By George Mascot" />
                        ))}
                    </Box>
                    <Box sx={{
                        display: {
                            xs: "flex",
                            sm: "none"
                        },
                        gap: "53px"
                    }}>
                        {Array.from({ length: 32 }, (_, index) => (
                            <Image key={index} src={byGeorgeMascot} alt="By George Mascot" />
                        ))}
                    </Box>
                    <Box sx={{
                        display: {
                            xs: "flex",
                            sm: "none"
                        },
                        gap: "53px",
                        marginLeft: "53px"
                    }}>
                        {Array.from({ length: 32 }, (_, index) => (
                            <Image key={index} src={byGeorgeMascot} alt="By George Mascot" />
                        ))}
                    </Box>
                </Box>

                <Box sx={{
                    display: "flex",
                    flexDirection: {
                        xs: "row",
                        sm: "column"
                    },
                    paddingTop: { xs: "1em", sm: "4em" },
                    paddingLeft: {
                        xs: 0,
                        sm: "64px"
                    },
                    marginLeft: {
                        xs: "2rem",
                        sm: 0
                    },
                    marginRight: {
                        xs: "2rem",
                        sm: 0
                    },
                    justifyContent: "space-between"
                }}>
                    <Box sx={{ xs: "-50px", sm: 0 }}>
                        <Image src={uberEats} alt="Uber Eats" style={{ height: "84px", width: "84px" }} />
                    </Box>
                    <Box sx={{ marginLeft: { xs: 0, sm: "6em" }, marginTop: { xs: 0, sm: "-20px" } }}>
                        <Image src={doorDash} alt="Door Dash" style={{ height: "84px", width: "84px" }} />
                    </Box>
                </Box>
            </Box>

            <Box gap={2} sx={{
                display: "flex",
                justifyContent: {
                    xs: "center",
                    sm: "flex-end"
                },
                paddingRight: {
                    xs: 0,
                    sm: "5rem"
                },
                marginTop: {
                    xs: "-3em",
                    sm: "-4em"
                },
                paddingBottom: "2em"
            }}>
                <Image src={tikTokButton} alt="Tik Tok" style={{ height: "40px", width: "40px" }} />
                <Image src={fbButton} alt="Facebook" style={{ height: "40px", width: "40px" }} />
                <Image src={igButton} alt="Instagram" style={{ height: "40px", width: "40px" }} />
            </Box>
        </Box >
    )
}