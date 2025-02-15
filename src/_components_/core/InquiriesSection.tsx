import React from "react";
import {
  Box,
  Button,
  MenuItem,
  Select,
  TextField,
  Typography,
  InputLabel
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
              borderRadius: 3,
              flexDirection: "column",
              alignItems: "center",
              height: "265px",
              position: "relative"
            }}
          >
            <Typography sx={{ alignSelf: "flex-start", position: "absolute", top: "1em", marginLeft: "2em" }}>
              Select date
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                borderBottom: "1px solid lightgray",
                width: "100%"
              }}
            >
              <Typography
                sx={{
                  fontSize: "32px",
                  fontWeight: 400,
                  marginLeft: "1em"
                }}
              >
                Enter date
              </Typography>
              <TodayIcon sx={{ marginTop: "10px", marginRight: "1em" }} />
            </Box>

            <DateField sx={{
              width: "90%",
              marginTop: "2em",
              "& .MuiOutlinedInput-root": {
                fieldset: {
                  borderColor: "custom.red",
                  borderWidth: 2
                },
                "&.Mui-focused fieldset": {
                  borderColor: "custom.red",
                  borderWidth: 3
                }
              }
            }} />
          </Box>
          <TextField
            multiline
            rows={9}
            label="Details"
            sx={{
              width: "600px", marginTop: "3em",
              ".MuiInputLabel-root": {
                color: "gray",
              },
              " .MuiOutlinedInput-root": {
                borderRadius: 3,
                "&.Mui-focused fieldset": {
                  borderColor: "lightgrey",
                  borderWidth: 2,
                }
              }
            }}
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
          <Select>
            <InputLabel>Reason for Inquiry</InputLabel>
            <MenuItem>Catering</MenuItem>
            <MenuItem>Feedback</MenuItem>
            <MenuItem>Questions</MenuItem>
            <MenuItem>Business Inquiry</MenuItem>
            <MenuItem>Other</MenuItem>
          </Select>

          <TextField label="Name" sx={{
            ".MuiInputLabel-root": {
              color: "grey"
            },
            " .MuiOutlinedInput-root": {
              "&.Mui-focused fieldset": {
                borderColor: "lightgrey",
                borderWidth: 2
              }
            }
          }} />
          <TextField label="Email" sx={{
            ".MuiInputLabel-root": {
              color: "grey"
            },
            " .MuiOutlinedInput-root": {
              "&.Mui-focused fieldset": {
                borderColor: "lightgrey",
                borderWidth: 2
              }
            }
          }} />
          <TextField type="number" label="Ph" sx={{
            ".MuiInputLabel-root": {
              color: "grey"
            },
            " .MuiOutlinedInput-root": {
              "&.Mui-focused fieldset": {
                borderColor: "lightgrey",
                borderWidth: 2
              }
            }
          }} />
          <TextField label="Number of people" sx={{
            ".MuiInputLabel-root": {
              color: "grey"
            },
            " .MuiOutlinedInput-root": {
              "&.Mui-focused fieldset": {
                borderColor: "lightgrey",
                borderWidth: 2
              }
            }
          }} />
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
