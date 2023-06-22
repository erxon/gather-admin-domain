import { Paper, Typography, Box, CircularProgress } from "@mui/material";
import StackRowLayout from "../StackRowLayout";
import useSWR from "swr";
import { fetcher } from "@/utils/auth/hooks";
import PersonIcon from "@mui/icons-material/Person";

export default function NumberOfUsers() {
  const { data, error, isLoading } = useSWR("/api/users", fetcher);

  if (error)
    return <Typography>Something went wrong fetching users.</Typography>;
  if (isLoading) return <CircularProgress />;


  const numberOfAuthorities = data.filter((user) => {
    return user.type === "authority";
  });
  console.log(numberOfAuthorities)
  const numberOfCitizens = data.filter((user) => {
    return user.type === "citizen";
  });

  return (
    <Paper variant="outlined" sx={{ p: 3, height: 75 }}>
      <Typography variant="body1" sx={{ fontWeight: "bold", mb: 1 }}>
        Number of users
      </Typography>
      <StackRowLayout spacing={1}>
        <Box sx={{ width: "50%" }}>
          <StackRowLayout spacing={1}>
            <PersonIcon />
            <Typography variant="body2">Authorities</Typography>
            <Typography>{numberOfAuthorities.length} users</Typography>
          </StackRowLayout>
        </Box>
        <Box sx={{ width: "50%" }}>
          <StackRowLayout spacing={1}>
            <PersonIcon />
            <Typography variant="body2">Citizens</Typography>
            <Typography>{numberOfCitizens.length} users</Typography>
          </StackRowLayout>
        </Box>
      </StackRowLayout>
    </Paper>
  );
}
