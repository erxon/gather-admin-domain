import {
  Card,
  Typography,
  Grid,
  CardMedia,
  CardContent,
  Button,
} from "@mui/material";
import Photo from "./Photo";
import { useState } from "react";

import ImageModal from "./ImageModal";

export default function PhotoCard(props) {
  //Change this with the real date in the db
  const [openModal, setOpenModal] = useState(false);

  const handleModalClose = () => {
    setOpenModal(false);
  };
  const createdAt = new Date().toDateString();

  return (
    <div>
      <ImageModal
        open={openModal}
        handleClose={handleModalClose}
        publicId={`https://res.cloudinary.com/dg0cwy8vx/image/upload/v1686195288/${props.uploadPreset}/${props.photo.image}`}
      />
      <Card variant="outlined">
        <CardMedia
          sx={{ textAlign: "center", backgroundColor: "#ededed", height: 150 }}
        >
          <Button
            onClick={() => {
              setOpenModal(true);
            }}
            component="div"
            sx={{ p: 0 }}
          >
            <Photo
              uploadPreset={props.uploadPreset}
              photo={props.photo.image}
            />
          </Button>
        </CardMedia>
        <CardContent>
          <Typography variant="body2">{props.photo.name}</Typography>
        </CardContent>
      </Card>
    </div>
  );
}
