import { Modal, Box, Typography } from "@mui/material";

export default function FullScreenPhoto({ photo, open, handleClose }) {
  const styles = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };
  console.log(photo);
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={styles}>
        <img
          src={`https://res.cloudinary.com/dg0cwy8vx/image/upload/v1688351569/${photo}`}
          style={{ width: "700px", height: "auto" }}
        />
        <Typography variant="subtitle2" color="white" sx={{textAlign: 'center'}}>{photo}</Typography>
      </Box>
    </Modal>
  );
}
