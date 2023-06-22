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
import React, { useState, useEffect } from "react";
import { useUser } from "@/utils/auth/hooks";
import { useRouter } from "next/router";

export default function Form() {
  const [user, { mutate }] = useUser();
  const router = useRouter();

  const [fieldValues, setFieldValues] = useState({
    username: "",
    password: "",
  });
  const [triggerError, setError] = useState({
    open: false,
    message: "",
  });

  const handleChange = (event) => {
    const { value, name } = event.target;
    setFieldValues({ ...fieldValues, [name]: value });
  };

  const handleSubmit = async () => {
    //API Call
    const login = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(fieldValues),
    });

    if (login.status === 200) {
      const user = await login.json();
      mutate(user);
    } else {
      setError({ open: true, message: "Incorrect username or password" });
    }
  };

  useEffect(() => {
    if (user) {
      router.push("/");
    }
  }, [user, router]);

  return (
    <Box>
      <Layout header="Gather Admin Domain">
        <Typography variant="body1">Login</Typography>
        <TextField
          fullWidth
          error={triggerError.open}
          label="Username"
          name="username"
          onChange={handleChange}
          value={fieldValues.username}
        />
        <PasswordField
          error={triggerError.open}
          handleChange={handleChange}
          password={fieldValues.password}
          name="password"
          label="Password"
        />
        {triggerError.open && (
          <Typography color="red">{triggerError.message}</Typography>
        )}
        {/*****************************************/}
        <Button variant="contained" onClick={handleSubmit}>
          Login
        </Button>
      </Layout>
    </Box>
  );
}
