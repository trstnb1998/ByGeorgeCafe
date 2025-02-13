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
                            sm: "18px"
                        },
                        fontWeight: "500",
                        marginLeft: {
                            xs: 0,
                            sm: "13px"
                        },
                        marginRight: {
                            xs: 0,
                            sm: "13px"
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