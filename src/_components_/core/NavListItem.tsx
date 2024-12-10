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
                        fontSize: "18px",
                        fontWeight: "500",
                        color: "custom.white",
                        paddingLeft: "13px",
                        paddingRight: "13px",
                        cursor: "pointer"
                    }}>
                        {title}
                    </Typography>
                }
            />
        </ListItem>
    )
}