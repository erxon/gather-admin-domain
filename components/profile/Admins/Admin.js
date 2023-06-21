import { Paper, Typography, Box, IconButton } from "@mui/material";
import Head from "./Head";

export default function Admin(props) {
  const createdAt = new Date(props.createdAt);
  return (
    <Paper sx={{ width: 350, p: 3, mb: 2 }}>
      <Head username={props.username} id={props.id} />

      <Box sx={{ mt: 2 }}>
        <Typography variant="body2">
          {props.firstName === undefined || props.lastName === undefined
            ? "No Display Name"
            : `${props.firstName} ${props.lastName}`}
        </Typography>
      </Box>
      <Box>
        <Typography variant="subtitle2" color="GrayText">
          Created {`${createdAt.toDateString()}`}
        </Typography>
      </Box>
    </Paper>
  );
}
