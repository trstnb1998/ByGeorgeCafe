import React from "react";
import {
  Box,
  Button,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateField, DatePicker } from "@mui/x-date-pickers";
import TodayIcon from "@mui/icons-material/Today";

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
              display: "flex",
              justifyContent: "center",
              width: "600px",
              border: "1px solid lightgrey",
              borderRadius: 2,
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography sx={{ alignSelf: "flex-start" }}>
              Select date
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography
                sx={{
                  fontSize: "32px",
                  fontWeight: 400,
                  borderBottom: "1px solid lightgrey",
                }}
              >
                Enter date
              </Typography>
              <TodayIcon />
            </Box>

            <DateField sx={{ width: "90%" }} />
          </Box>
          <TextField
            multiline
            label="Details"
            sx={{ height: "260px", width: "600px" }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "640px",
            height: "589px",
            backgroundColor: "white",
            justifyContent: "space-around",
          }}
        >
          <Select label="Reason for Inquiry">
            <MenuItem>Catering</MenuItem>
            <MenuItem>Feedback</MenuItem>
            <MenuItem>Questions</MenuItem>
            <MenuItem>Business Inquiry</MenuItem>
            <MenuItem>Other</MenuItem>
          </Select>

          <TextField label="Name" />
          <TextField label="Email" />
          <TextField label="Ph" />
          <TextField label="Number of people" />
          <Button
            sx={{
              backgroundColor: "custom.red",
              color: "custom.white",
              height: "100px",
              fontSize: "50px",
              fontWeight: 800,
              textTransform: "capitalize",
              borderRadius: 2,
              boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.5)",
            }}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </LocalizationProvider>
  );
}
