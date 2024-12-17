import { ListItem, ListItemText, Typography } from "@mui/material";

export type ListItemComponentProperties = {
    title: string;
}

export default function NavListItem({ title }: ListItemComponentProperties) {

    return (
        <ListItem >
            <ListItemText
                primary={
                    <Typography variant="body1" sx={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: {
                            xs: "12px",
                        },
                        fontWeight: "500",
                        color: "custom.white",
                        paddingLeft: {
                            xs: "10x",
                        },
                        paddingRight: {
                            xs: "10px",
                        },
                        cursor: "pointer"
                    }}>
                        {title}
                    </Typography>
                }
            />
        </ListItem>
    )
}