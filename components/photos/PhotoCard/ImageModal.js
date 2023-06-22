import { Modal, Box } from "@mui/material";

export default function ImageModal(props) {
  const styles = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "#000000",
    boxShadow: 24,
    p: 0.5,
  };
  return (
    <Modal
      open={props.open}
      onClose={() => {
        props.handleClose();
      }}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={styles}>
        <img
          src={props.publicId}
          alt="query"
          style={{ width: "500px", height: "auto" }}
        />
      </Box>
    </Modal>
  );
}
