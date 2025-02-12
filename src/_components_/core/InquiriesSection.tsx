import React from "react";
import { Box, Button, MenuItem, Select, TextField, Typography } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateField, DatePicker } from "@mui/x-date-pickers";

export default function InquiriesSection() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Typography
        sx={{
          fontWeight: 800,
          fontSize: "75px",
          color: "custom.red",
          textAlign: "center",
        }}
      >
        Inquiries
      </Typography>
      <Box
        sx={{ display: "flex", justifyContent: "center", flexDirection: "row" }}
      >
        <Box>
          <Box
            sx={{
              justifyContent: "center",
              width: "600px",
              border: "1px solid lightgrey",
              borderRadius: 2,
            }}
          >
            <Typography>Select date</Typography>
            <Typography
              sx={{
                fontSize: "32px",
                fontWeight: 400,
                borderBottom: "1px solid lightgrey",
              }}
            >
              Enter date
            </Typography>
            <DateField />
          </Box>
          <TextField multiline maxRows={4} label="Details" />
        </Box>
        <Box sx={{display: "flex", flexDirection: "column"}}>
          <Select label="Reason for Inquiry">
            <MenuItem>Catering</MenuItem>
            <MenuItem>Feedback</MenuItem>
            <MenuItem>Questions</MenuItem>
            <MenuItem>Business Inquiry</MenuItem>
            <MenuItem>Other</MenuItem>
          </Select>

          <TextField label="Name"/>
          <TextField label="Email"/>
          <TextField label="Ph"/>
          <TextField label="Number of people"/>
          <Button>Submit</Button>
        </Box>
      </Box>
    </LocalizationProvider>
  );
}
