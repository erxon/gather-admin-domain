import { Modal, TextField, Typography, Box, Button } from "@mui/material";
import { useState } from "react";

export default function DeleteModal(props) {
  const [inputUsername, setInputUsername] = useState("");
  const [error, setError] = useState({
    error: false,
    message: ''
  })

  const handleChange = (event) => {
    setInputUsername(event.target.value);
  };

  const handleSubmit = async () => {
    if(inputUsername !== props.username){
        setError({
            error: true,
            message: 'Username did not match.'
        })
        return;
    }

    const deleteAdmin = await fetch(`/api/admin/${props.id}`, {
      method: "DELETE"
    });

    if (deleteAdmin.status === 200) {
      await fetch("/api/logout");
      props.mutateUser({});
    }
    const result = await deleteAdmin.json();

    console.log(result);
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };

  return (
    <Modal
      open={props.open}
      onClose={() => {
        props.handleClose();
      }}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <Box sx={{ ...style }}>
        <Box sx={{ mb: 2 }}>
          <Box sx={{ mb: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 3 }}>
              This action cannot be undone
            </Typography>
            <Typography variant="body1">
              Please type your username to confirm
            </Typography>
          </Box>
          <TextField
            fullWidth
            variant="outlined"
            label="username"
            error={error.error}
            value={inputUsername}
            onChange={handleChange}
          />
          {error.error && <Typography variant="subtitle2" color="red">{error.message}</Typography>}
        </Box>
        
        <Button
          disabled={inputUsername === ""}
          size="small"
          variant="outlined"
          onClick={handleSubmit}
        >
          Confirm
        </Button>
      </Box>
    </Modal>
  );
}
