import { Button, TextField, Typography, Box } from "@mui/material";
import StackRowLayout from "@/src/app/components/StackRowLayout";
import Layout from "./Layout";
import React, { useState } from "react";

export default function EditProfileDetails(props) {
    console.log(user)
  const handleChange = (event) => {
    const { value, name } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleSave = () => {
    console.log(user);
  };

  return (
    <Layout>
      <StackRowLayout spacing={2}>
        <Typography variant="h6">Details</Typography>
        <Button
          onClick={handleSave}
          disableElevation
          size="small"
          variant="contained"
        >
          Save
        </Button>
      </StackRowLayout>
      <Box sx={{ mt: 2 }}>
        <TextField
          sx={{ mb: 1.5 }}
          name="firstName"
          onChange={handleChange}
          value={user.firstName}
          label="First Name"
        />
        <TextField
          sx={{ mb: 1.5 }}
          name="lastName"
          onChange={handleChange}
          value={user.lastName}
          label="Last Name"
        />
        <TextField
          sx={{ mb: 1.5 }}
          name="email"
          onChange={handleChange}
          value={user.email}
          label="Email"
        />
        <TextField
          name="contactNumber"
          onChange={handleChange}
          value={user.contactNumber}
          label="Contact Number"
        />
      </Box>
    </Layout>
  );
}
