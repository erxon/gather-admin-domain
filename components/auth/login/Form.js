import {
    Box,
    Paper,
    TextField,
    Typography,
    Stack,
    Button,
    Divider,
  } from "@mui/material";
  import PasswordField from "../../PasswordField";
  import React, { useState } from "react";
  
  export default function Form() {
    const [fieldValues, setFieldValues] = useState({
      username: "",
      password: "",
    });
  
    const handleChange = (event) => {
      const { value, name } = event.target;
      setFieldValues({ ...fieldValues, [name]: value });
    };
  
    const handleSubmit = async () => {
      //API Call
      console.log(fieldValues);
    };
  
    return (
      <Box>
        <Paper sx={{ p: 3, width: 350, textAlign: "center" }} variant="outlined">
          <Typography variant="h6">Login</Typography>
          <Divider sx={{ mt: 1 }} />
  
          {/*****************************************/}
  
          <Stack
            sx={{ mb: 2, p: 2 }}
            alignItems="center"
            justifyContent="center"
            spacing={2}
          >
            <TextField
              fullWidth
              label="Username"
              name="username"
              onChange={handleChange}
              value={fieldValues.username}
            />
            <PasswordField
              handleChange={handleChange}
              password={fieldValues.password}
              name="password"
              label="Password"
            />
          </Stack>
  
          {/*****************************************/}
          <Button variant="contained" onClick={handleSubmit}>
            Login
          </Button>
        </Paper>
      </Box>
    );
  }
  