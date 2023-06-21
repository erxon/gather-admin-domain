import { Snackbar } from "@mui/material";
import { useState } from "react";

export default function DisplaySnackbar(props) {
  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      open={props.open}
      onClose={() => {props.handleClose()}}
      message={props.message}
    />
  );
}
