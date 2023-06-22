import { Paper } from "@mui/material";

export default function UnverifiedUser({ profile }) {
  return (
    <Paper variant="outlined">
      <pre>{JSON.stringify(profile, null, 2)}</pre>
    </Paper>
  );
}
