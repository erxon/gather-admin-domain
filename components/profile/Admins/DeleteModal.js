import DisplaySnackbar from "@/components/DisplaySnackbar";
import { Modal, TextField, Typography, Box, Button } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";

export default function DeleteModal(props) {
  const router = useRouter();
  const [inputUsername, setInputUsername] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState({
    open: false,
    message: "",
  });

  const [error, setError] = useState({
    error: false,
    message: "",
  });

  const handleSnackbarClose = () => {
    setOpenSnackbar({ open: false });
  };

  const handleChange = (event) => {
    setInputUsername(event.target.value);
  };

  const handleSubmit = async () => {
    if (inputUsername !== props.username) {
      setError({
        error: true,
        message: "Username did not match.",
      });
      return;
    }

    const deleteAdmin = await fetch(`/api/admin/${props.id}`, {
      method: "DELETE",
    });

    if (deleteAdmin.status === 200) {
      router.reload()
    }
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
    <div>
      <DisplaySnackbar
        open={openSnackbar.open}
        message={openSnackbar.message}
        handleClose={handleSnackbarClose}
      />
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
                Please type the admin's username to confirm
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
            {error.error && (
              <Typography variant="subtitle2" color="red">
                {error.message}
              </Typography>
            )}
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
    </div>
  );
}
