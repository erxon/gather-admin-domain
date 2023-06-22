import { Paper, Typography, Grid } from "@mui/material";
import FolderIcon from "@mui/icons-material/Folder";
import { useRouter } from "next/router";

export default function Folder({ reference }) {
  const router = useRouter();

  return (
    <Grid item xs={6} md={3} sm={4}>
      <Paper
        onClick={() => {
          router.push(`/photos/reference/${reference._id}`)
        }}
        component="Button"
        sx={{
          textAlign: "left",
          p: 3,
          width: "100%",
          height: 175,
          cursor: "pointer",
        }}
        variant="outlined"
      >
        <FolderIcon color="primary" fontSize="large" />
        <Typography variant="body1">
          <span style={{ fontWeight: "bold" }}>{reference.missingPerson}</span>
        </Typography>
      </Paper>
    </Grid>
  );
}
