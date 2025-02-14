import { Box, Typography } from "@mui/material";
import React from "react";

export default function Map() {
  return (
    <Box sx={{ position: "relative" }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.781235175519!2d151.10523997638492!3d-33.89528757321644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12bb802dc30ce1:0x296ad4394f6e05c1!2sBy George Coffee!5e0!3m2!1sen!2sau!4v1739333900758!5m2!1sen!2sau"
        width="100%"
        height="485"
        style={{ border: 0 }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <Box
        sx={{
          width: "375px",
          height: "445px",
          backgroundColor: "custom.beige",
          position: "absolute",
          bottom: "5em",
          right: "3em",
          borderRadius: "22px",
          border: "1px solid #FF2D2D",
          borderRight: "5px solid #FF2D2D",
          borderBottom: "5px solid #FF2D2D",
          boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.5)",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box sx={{ color: "custom.red", justifyContent: "space-around", alignItems: "space-around", display: "flex", flexDirection: "column"}}>
          <Typography sx={{ fontSize: "32px", fontWeight: 400}}>
            Mon - Sat
            <br />| 6:00am - 2:30pm
          </Typography>
          <Typography sx={{ fontSize: "32px", fontWeight: 400}}>
            Sunday
            <br />| 6:30am - 2:30pm
          </Typography>
          <Typography sx={{ fontSize: "32px", fontWeight: 400}}>
            Public Holidays
            <br />| Times Vary
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          backgroundColor: "custom.red",
          height: "64px",
          color: "custom.white",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{ fontSize: { xs: "18px", md: "26px" }, fontWeight: 500 }}
        >
          117 Georges River Rd, Croydon Park NSW 2133
        </Typography>
        <Typography
          sx={{
            fontSize: "26px",
            fontWeight: 500,
            position: "absolute",
            right: "3em",
            textDecoration: "underline",
            display: { xs: "none", lg: "flex" },
          }}
        >
           0421 133 819
        </Typography>
      </Box>
    </Box>
  );
}
