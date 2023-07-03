import { Modal, Box, Typography, Button } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";

export default function ConfirmationModal({ userId, open, handleClose }) {
  const router = useRouter();
  const [error, setError] = useState({
    error: false,
    message: "",
  });
  const styles = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    p: 4,
  };
  const handleVerify = async () => {
    const verifyUser = await fetch(`/api/users/${userId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        status: "verified",
      }),
    });

    if (verifyUser.status === 200) {
      router.reload();
    } else {
      setError({
        error: true,
        message: "Something went wrong.",
      });
    }
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={styles}>
        {error.error && <Typography color="red">{error.message}</Typography>}
        <Typography variant="h6">Verify user</Typography>
        <Typography variant="body1">
          Click confirm to verify the user.
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Button
            onClick={handleVerify}
            size="small"
            sx={{ mr: 1 }}
            variant="contained"
          >
            Confirm
          </Button>
          <Button onClick={() => handleClose()} size="small" variant="outlined">
            Cancel
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}
