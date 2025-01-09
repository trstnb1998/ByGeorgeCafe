import { Box } from '@mui/material';
import Image from 'next/image';

import byGeorgeMascot from '@/_assets_/images/byGeorgeMascot.png';
import holdCoffee from '@/_assets_/images/holdCoffee.png';
import doorDash from '@/_assets_/images/doorDash.png';
import uberEats from '@/_assets_/images/uberEats.png';

import SocialButtons from './SocialButtons';


export default function HeroImages() {
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
                    <Box sx={{ position: "absolute", bottom: -10, left: "50%", transform: "translateX(-50%)", marginTop: 3.5 }}>
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

            <Box sx={{
                display: "flex",
                justifyContent: {
                    xs: "center",
                    sm: "flex-end"
                },
                marginRight: {
                    xs: 0,
                    sm: "5rem"
                },
                marginTop: {
                    xs: "-3em",
                    sm: "-5em"
                },
                marginBottom: "2rem"
            }}>
                <SocialButtons />
            </Box>
        </Box >
    )
}