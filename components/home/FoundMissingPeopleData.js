import { Paper, Typography } from "@mui/material";

export default function FoundMissingPeopleData() {
  return (
    <Paper variant="outlined" sx={{ p: 3, mt: 2 }}>
      <Typography sx={{ fontWeight: "bold" }}>
        Missing People Found
      </Typography>
    </Paper>
  );
}
