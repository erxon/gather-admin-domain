import { Typography, Grid, Paper } from "@mui/material";

export default function Layout({ children, heading }) {
  return (
    <div>
      <Paper variant="outlined" sx={{ my: 2, p: 3 }}>
        <Typography sx={{ mb: 2 }} variant="body1">
          {heading}
        </Typography>
        <Grid container spacing={0.25}>
          {children}
        </Grid>
      </Paper>
    </div>
  );
}
