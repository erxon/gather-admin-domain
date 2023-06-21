import {
  Button,
  TextField,
  Typography,
  Box,
  InputAdornment,
  IconButton,
  Divider,
} from "@mui/material";
import StackRowLayout from "@/components/StackRowLayout";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

import React, { useState } from "react";
import DisplaySnackbar from "@/components/DisplaySnackbar";

export default function ChangePassword() {
  const [password, setPassword] = useState({
    currentPassword: "",
    newPassword: "",
  });
  const [displaySnackbar, setDisplaySnackbar] = useState({
    open: false,
    message: "",
  });

  const [visible, setVisibility] = useState(false);

  const handleSnackbarClose = () => {
    setDisplaySnackbar({open: false})
  }

  const handlePasswordVisibility = () => {
    setVisibility(!visible);
  };
  const handleChange = (event) => {
    const { value, name } = event.target;
    setPassword({ ...password, [name]: value });
  };

  const handleSave = async () => {
    const changePassword = await fetch("/api/admin/password", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(password),
    });

    const result = await changePassword.json();

    setDisplaySnackbar({
      open: true,
      message: result.message,
    });
  };

  return (
    <Box>
      <DisplaySnackbar
        open={displaySnackbar.open}
        handleClose={handleSnackbarClose}
        message={displaySnackbar.message}
      />
      <StackRowLayout spacing={2}>
        <Typography variant="body1">Change Password</Typography>
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
          name="currentPassword"
          onChange={handleChange}
          value={password.currentPassword}
          label="Current Password"
          type={visible ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handlePasswordVisibility}
                >
                  {visible ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <TextField
          size="small"
          name="newPassword"
          onChange={handleChange}
          value={password.newPassword}
          label="New Password"
          type={visible ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handlePasswordVisibility}
                >
                  {visible ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Box>
    </Box>
  );
}
