import PasswordField from "@/components/PasswordField";
import { Box, TextField, Paper, Typography, Button } from "@mui/material";
import { useState } from "react";


export default function Form() {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    const { value, name } = event.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async () => {
    console.log(values)
    const newAdmin = await fetch('/api/admin', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(values)
    })
    const result = await newAdmin.json()

    console.log(result)
  }

  return (
    <Paper variant="outlined" sx={{ width: 350, p: 3 }}>
      <Typography sx={{ mb: 2 }}>New admin</Typography>
      <Box sx={{mb: 2}}>
        <TextField
          sx={{ mb: 2 }}
          fullWidth
          value={values.username}
          onChange={handleChange}
          name="username"
          label="Username"
          variant="outlined"
        />
        <PasswordField
          label="Password"
          name="password"
          password={values.password}
          handleChange={handleChange}
        />
      </Box>
      <Button onClick={handleSubmit} size="small" variant="contained">
        Add
      </Button>
    </Paper>
  );
}
