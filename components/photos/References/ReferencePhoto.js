import PhotoCard from "../PhotoCard/PhotoCard";
import { Grid, Tooltip } from "@mui/material";

export default function ReferencePhoto({ publicId, fileName }) {
  return (
    <Grid item xs={6} md={3} sm={4}>
      <PhotoCard
        photo={{ image: publicId, name: fileName }}
        uploadPreset="report-photos"
      />
    </Grid>
  );
}
