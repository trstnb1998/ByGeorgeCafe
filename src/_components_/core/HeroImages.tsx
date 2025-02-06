import { Box } from '@mui/material';
import Image, { StaticImageData } from 'next/image';

import byGeorgeMascot from '/public/images/by-george-mascot.png';
import milkshake from '/public/images/milkshake.png';
import doorDash from '/public/images/door-dash.png';
import uberEats from '/public/images/uber-eats.png';

import SocialButtons from './SocialButtons';

const IMAGE_WIDTH = "84px";

const DeliveryImage = ({ src, alt, ...rest }: { src: string | StaticImageData, alt: string, sx?: object }) => (
    <Box {...rest}>
        <Image src={src} alt={alt} style={{ height: "84px", width: IMAGE_WIDTH }} />
    </Box>
);

const DeliveryImages = ({ ...rest }) => {
    return (
        <Box {...rest} sx={{
            paddingX: 4,
            display: "flex",
            justifyContent: {
                xs: "space-between",
                sm: "space-between",
            },
            flex: { xs: 1, md: "0 1 auto" },
            width: { xs: "100%", md: "auto" },
            flexDirection: { xs: "row", md: "column" },
            alignSelf: "flex-end"

        }}>
            <DeliveryImage src={uberEats} alt="Uber Eats" />
            <DeliveryImage src={doorDash} alt="Door Dash" sx={{
                marginTop: {
                    xs: 0,
                    md: -4
                },
                marginLeft: {
                    xs: 0,
                    md: IMAGE_WIDTH
                },
            }} />
        </Box>
    )
}

export default function HeroImages() {
    return (
        <Box sx={{
            position: "relative",
            display: "flex",
            width: "100%",
            paddingBottom: 8,
            flexDirection: {
                xs: "column-reverse",
                sm: "column-reverse",
                md: "row",
            },
            justifyContent: "space-between"
        }}>

            {/* BG Banner */}
            <Box sx={{
                position: "absolute",
                zIndex: -1,
                top: {
                    xs: 64,
                    md: 0,
                },
                left: 0,
                right: 0,
                content: '""',

                display: "flex",
                flex: 1,
                alignItems: "center",
                flexDirection: "column",
                height: {
                    sm: 500,
                    md: "auto"
                },
                minHeight: {
                    xs: 500,
                    md: 300
                },
                backgroundImage: `url(${byGeorgeMascot.src})`,
                backgroundRepeat: {
                    xs: "no-repeat round",
                    sm: "no-repeat round",
                    md: "repeat-x"
                },
                backgroundSize: {
                    md: "fill"
                }
            }} />

            {/* Delivery Images */}
            <DeliveryImages />

            {/* Milkshake Cup */}
            <Box sx={{
                display: "flex",
                justifyContent: "center",
                paddingTop: 4,
                marginBottom: {
                    xs: 0,
                    md: -8
                },
                paddingX: {
                    xs: 12,
                }
            }}>
                <Image src={milkshake} alt="milkshake" style={{ height: "auto", maxWidth: 520, minWidth: 440, width: "100%" }} />
            </Box>

            {/* Social Icons */}
            <SocialButtons />
        </Box>
    );
}