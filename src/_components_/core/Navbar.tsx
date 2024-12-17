import { Typography, Box, List } from "@mui/material"
import NavListItem from "./NavListItem"

export default function NavBar() {
    return (
        <Box sx={{
            display: "flex",
            width: {
                xs: "100%"
            },
            height: "70px",
            backgroundColor: "custom.red",
            alignItems: "center",
            flexDirection: {
                xs: "column"
            }
        }}>
            <Box>
                <Typography sx={{ color: "custom.white", fontSize: "18px", fontFamily: "Pacifico" }}>B.G.</Typography>
            </Box>

            <Box sx={{
                display: "flex",
                justifyContent: "center",
                flexGrow: 1
            }}>
                <List sx={{ display: "flex" }}>
                    <NavListItem title="Home" />
                    <NavListItem title="Gallery" />
                    <NavListItem title="Menu" />
                    <NavListItem title="Retail" />
                    <NavListItem title="Inquiries" />
                    <NavListItem title="Contact" />
                </List>
            </Box >
        </Box >
    )
}
