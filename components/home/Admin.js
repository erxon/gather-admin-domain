import { Button, Paper, Typography } from "@mui/material";
import Link from "next/link";

export default function Admin({ username, mutate }) {
  const handleLogout = async () => {
    await fetch("/api/auth/logout");
    mutate({});
  };

  return (
    <div>
      <Paper variant="outlined" sx={{ p: 3 }}>
        <Typography variant="body1" sx={{ fontWeight: "bold" }}>
          Hello admin, {username}
        </Typography>
        <Typography variant="body2">
          Here are the updates in the Gather
        </Typography>
        <Typography variant="body2">
          You may visit the app here:{" "}
          <Link href="https://gather-plum.vercel.app/">
            https://gather-plum.vercel.app/
          </Link>
        </Typography>
        <Button
          onClick={handleLogout}
          sx={{ mt: 2 }}
          size="small"
          variant="outlined"
        >
          Logout
        </Button>
      </Paper>
    </div>
  );
}
