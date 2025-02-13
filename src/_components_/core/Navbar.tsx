import { Typography, Box, List } from "@mui/material"
import NavListItem from "./NavListItem"
export type NavBarProps = {
    backgroundColor: string;
    textColor: string;
}


export default function NavBar({ backgroundColor, textColor }: NavBarProps) {
    return (
        <Box sx={{
            display: "flex",
            width: {
                xs: "100%"
            },
            height: {
                xs: "100px",
                sm: "100px",
                md: "70px"
            },
            backgroundColor: backgroundColor,
            alignItems: "center",
            flexDirection: {
                xs: "column",
                sm: "column",
                md: "row"
            },
            color: textColor
        }}>
            <Box>
                <Typography sx={{
                    fontSize: "18px",
                    fontFamily: "Pacifico",
                    paddingLeft: {
                        xs: 0,
                        sm: 0,
                        md: "4rem"
                    },
                    marginTop: {
                        xs: "1rem",
                        sm: "1rem",
                        md: 0
                    }
                }}>B.G.</Typography>
            </Box>

            <Box sx={{
                display: "flex",
                justifyContent: "center",
                flexGrow: 1,
                paddingRight: {
                    xs: 0,
                    sm: 0,
                    md: "4rem"
                }
            }}>
                <List sx={{ display: "flex" }}>
                    <NavListItem title="Home" />
                    <NavListItem title="Gallery" />
                    <NavListItem title="Menu" />
                    <NavListItem title="Retail" />
                    <NavListItem title="Inquiries" />
                    <Box sx={{
                        display: {
                            xs: "none",
                            sm: "none",
                            md: "flex"
                        }
                    }}>
                        <NavListItem title="Contact" />
                    </Box>
                </List>
            </Box >
        </Box >
    )
}
