import { Box, Paper, Stack, Typography, Divider } from "@mui/material";

export default function Layout({ children, header }) {
  return (
    <Box>
      <Paper sx={{ p: 3, width: 350, textAlign: "center" }} variant="outlined">
        <Typography variant="h6">{header}</Typography>
        <Divider sx={{ mt: 1 }} />
        <Stack
          sx={{ mb: 2, p: 2 }}
          alignItems="center"
          justifyContent="center"
          spacing={2}
        >
          {children}
        </Stack>
      </Paper>
    </Box>
  );
}
