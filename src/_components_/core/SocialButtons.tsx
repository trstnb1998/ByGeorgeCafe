import { Box, Link } from "@mui/material";
import Image from "next/image";
import igButton from '@/_assets_/images/igButton.png';
import fbButton from '@/_assets_/images/fbButton.png';
import tikTokButton from '@/_assets_/images/tikTokButton.png';

export default function SocialButtons() {
    return (
        <Box gap={2} sx={{ display: "flex" }}>
            <Link href="https://www.tiktok.com/@bygeorgecoffee" target="_blank">
                <Image src={tikTokButton} alt="Tik Tok" style={{ height: "40px", width: "40px", borderRadius: "13px", boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.7)" }} />
            </Link>
            <Link href="https://www.facebook.com/profile.php?id=100067763267744" target="_blank">
                <Image src={fbButton} alt="Facebook" style={{ height: "40px", width: "40px", borderRadius: "13px", boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.7)" }} />
            </Link>
            <Link href="https://www.instagram.com/bygeorge.coffee/" target="_blank">
                <Image src={igButton} alt="Instagram" style={{ height: "40px", width: "40px", borderRadius: "13px", boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.7)" }} />
            </Link>
        </Box>
    )
}