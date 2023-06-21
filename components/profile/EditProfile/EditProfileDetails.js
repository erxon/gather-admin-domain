import { Button, TextField, Typography, Box, Divider } from "@mui/material";
import StackRowLayout from "@/components/StackRowLayout";
import React, { useState } from "react";
import DisplaySnackbar from "@/components/DisplaySnackbar";

export default function EditProfileDetails(props) {
  const [user, setUser] = useState({
    username: props.user.username,
    firstName: props.user.firstName,
    lastName: props.user.lastName,
  });
  const [displaySnackbar, setDisplaySnackbar] = useState({
    open: false,
    message: "",
  });

  const handleSnackbarClose = () => {
    setDisplaySnackbar({ open: false });
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleSave = async () => {
    const update = await fetch(
      `/api/admin/${props.user._id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: user.firstName,
          lastName: user.lastName,
        }),
      }
    );

    const result = await update.json();
    setDisplaySnackbar({
      open: true,
      message: `${result.message} ${result.user.firstName} ${result.user.lastName}`,
    });
  };

  return (
    <Box>
      {/*Trigger snackbar*/}
      <DisplaySnackbar
        open={displaySnackbar.open}
        message={displaySnackbar.message}
        handleClose={handleSnackbarClose}
      />
      <StackRowLayout spacing={2}>
        <Typography variant="body1">Details</Typography>
        <Button
          onClick={handleSave}
          disableElevation
          size="small"
          variant="contained"
        >
          Save
        </Button>
      </StackRowLayout>

      <Divider sx={{ my: 2 }} />

      <Box sx={{ mt: 2 }}>
        <TextField
          sx={{ mr: 1 }}
          size="small"
          name="firstName"
          onChange={handleChange}
          value={user.firstName}
          label="First Name"
        />
        <TextField
          sx={{ mr: 1 }}
          size="small"
          name="lastName"
          onChange={handleChange}
          value={user.lastName}
          label="Last Name"
        />
      </Box>
    </Box>
  );
}
