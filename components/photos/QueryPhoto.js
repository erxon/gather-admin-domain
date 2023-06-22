import PhotoCard from "./PhotoCard/PhotoCard";
import { Grid } from "@mui/material";

export default function QueryPhoto(props) {
  //Change this with the real date in the db
  return (
    <Grid item xs={6} md={3} sm={4}>
      <PhotoCard photo={props.photo} uploadPreset="query-photos"/>
    </Grid>
  );
}
