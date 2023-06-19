import {
  TextField,
  Box,
  Button,
  Paper,
  Typography,
  Divider,
} from "@mui/material";
import PasswordField from "../../PasswordField";
import Layout from "../Layout";
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
    console.log(values);
  };
  return (
    <Layout header="Create Admin">
      {/*****************************************/}
      <TextField
        fullWidth
        name="username"
        label="username"
        onChange={handleChange}
        value={values.username}
      />
      <PasswordField
        name="password"
        onChange={handleChange}
        password={values.password}
        label="Password"
      />
      <Button onClick={handleSubmit}>Create User</Button>
    </Layout>
  );
}
