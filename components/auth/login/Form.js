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
import Layout from "../Layout";
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
    const login = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(fieldValues)
    })

    const result = await login.json();

    console.log(result)
    console.log(fieldValues);
  };

  return (
    <Layout header="Login">
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

      {/*****************************************/}
      <Button variant="contained" onClick={handleSubmit}>
        Login
      </Button>
    </Layout>
  );
}
