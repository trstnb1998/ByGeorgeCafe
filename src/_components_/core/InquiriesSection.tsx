import React, { useState } from "react";
import {
  Box,
  Button,
  MenuItem,
  Select,
  TextField,
  Typography,
  FormControl,
  SelectChangeEvent
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateField } from "@mui/x-date-pickers";
import TodayIcon from "@mui/icons-material/Today";
import dayjs, { Dayjs } from "dayjs";

interface FormData {
  name: string;
  email: string;
  phone: string;
  numPeople: string;
  inquiryReason: string;
  details: string;
  date: string;
}

export default function InquiriesSection() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    numPeople: "",
    inquiryReason: "",
    details: "",
    date: "",
  });

  const [submitted, setSubmitted] = useState<boolean>(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | SelectChangeEvent<string>) => {
    const { name, value } = e.target;
    if (name) {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };
  const handleDateChange = (date: Dayjs | null) => {
    setFormData((prev) => ({
      ...prev,
      date: date ? date.format("YYYY-MM-DD") : "",
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch("https://formspree.io/f/mjkgaqgp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setSubmitted(true);
    } else {
      alert("Error submitting form");
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          textAlign: "center",
          px: { xs: 2, md: 0 }, // Padding for mobile
        }}
      >
        <Typography
          sx={{
            fontWeight: 800,
            fontSize: { xs: "40px", lg: "75px" }, // Responsive text size
            color: "custom.red",
            textAlign: "center",
            mb: "1em",
          }}
        >
          Inquiries
        </Typography>
        {submitted ? (
          <Typography
            sx={{
              textAlign: "center",
              fontSize: { xs: "18px", lg: "24px" },
              color: "custom.red",
              mt: "3em",
            }}
          >
            Thank you! Your inquiry has been submitted.
          </Typography>
        ) : (
          <form onSubmit={handleSubmit} style={{ width: "100%", maxWidth: "1200px" }}>
            <FormControl required fullWidth>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", lg: "row" }, // Mobile: stacked, Desktop: row
                  justifyContent: "center",
                  gap: "40px",
                  width: "100%",
                }}
              >
                {/* Left Section - Date & Details */}
                <Box sx={{ width: { xs: "100%", lg: "50%" }, mt: { xs: "0", lg: "1em" } }}>
                  {/* Date Picker */}
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      width: "100%",
                      border: "1px solid lightgrey",
                      borderRadius: 3,
                      padding: "1em",
                      height: "265px",
                      position: "relative",
                    }}
                  >
                    <Typography sx={{ alignSelf: "flex-start", position: "absolute", top: "1em", ml: "2em" }}>
                      Select date
                    </Typography>
                    <Box sx={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid lightgray", width: "100%" }}>
                      <Typography sx={{ fontSize: "32px", fontWeight: 400, ml: "1em", marginTop: "2em" }}>Enter date</Typography>
                      <TodayIcon sx={{ mt: "10px", mr: "1em" }} />
                    </Box>

                    <DateField
                      required
                      value={formData.date ? dayjs(formData.date) : null}
                      onChange={handleDateChange}
                      sx={{ width: "90%", mt: "2em" }}
                    />
                  </Box>

                  {/* Details Field */}
                  <TextField
                    required
                    multiline
                    rows={10}
                    label="Details"
                    name="details"
                    value={formData.details}
                    onChange={handleChange}
                    sx={{
                      width: "100%",
                      mt: "2em",
                      ".MuiInputLabel-root": { color: "gray" },
                      ".MuiOutlinedInput-root": {
                        borderRadius: 3,
                        "&.Mui-focused fieldset": { borderColor: "lightgrey", borderWidth: 2 },
                      },
                    }}
                  />
                </Box>

                {/* Right Section - Form Inputs */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: { xs: "100%", lg: "50%" },
                    height: "589px",
                    backgroundColor: "white",
                    justifyContent: "space-around",
                  }}
                >
                  {/* Inquiry Reason */}
                  <Select
                    required
                    name="inquiryReason"
                    value={formData.inquiryReason}
                    onChange={handleChange}
                    displayEmpty
                    renderValue={(selected) => selected || "Reason for inquiry"}
                    sx={{
                      width: "100%",
                      color: formData.inquiryReason ? "inherit" : "gray",
                      textAlign: "left",
                    }}
                  >
                    <MenuItem value="" disabled>Reason for inquiry</MenuItem>
                    <MenuItem value="Catering">Catering</MenuItem>
                    <MenuItem value="Feedback">Feedback</MenuItem>
                    <MenuItem value="Questions">Questions</MenuItem>
                    <MenuItem value="Business Inquiry">Business Inquiry</MenuItem>
                    <MenuItem value="Other">Other</MenuItem>
                  </Select>

                  <TextField required label="Name" name="name" value={formData.name} onChange={handleChange} fullWidth />
                  <TextField required label="Email" name="email" type="email" value={formData.email} onChange={handleChange} fullWidth />
                  <TextField required label="Phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} fullWidth />
                  <TextField required label="Number of people" name="numPeople" type="number" value={formData.numPeople} onChange={handleChange} fullWidth />

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    sx={{
                      backgroundColor: "custom.red",
                      color: "custom.white",
                      height: "100px",
                      fontSize: "50px",
                      fontWeight: 800,
                      textTransform: "capitalize",
                      borderRadius: 2,
                      boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.5)",
                      width: "100%",
                    }}
                  >
                    Submit
                  </Button>
                </Box>
              </Box>
            </FormControl>
          </form>
        )}
      </Box>
    </LocalizationProvider>
  );
}
