import { Box, IconButton, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import StackRowLayout from "@/components/StackRowLayout";
import { useRouter } from "next/router";

export default function Head(){
    const router = useRouter()
    return (
        <Box>
          <StackRowLayout spacing={2}>
            <IconButton onClick={() => {router.push('/reports')}}>
              <ArrowBackIcon />
            </IconButton>
            <Typography variant="h6">Archives</Typography>
          </StackRowLayout>
        </Box>
      );
}