import StackRowLayout from "../StackRowLayout";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { Box, IconButton, Typography } from "@mui/material";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const router = useRouter();
  return (
    <Box>
      <Box sx={{ mb: 4 }}>
        <StackRowLayout spacing={2}>
          <IconButton
            onClick={() => {
              router.push("/profile");
            }}
          >
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h6">Edit Profile</Typography>
        </StackRowLayout>
        {children}
      </Box>
    </Box>
  );
}
