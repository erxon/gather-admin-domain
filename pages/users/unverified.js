import { CircularProgress, Divider, Typography } from "@mui/material";
import useSWR from "swr";
import { fetcher } from "@/utils/auth/hooks";

export default function Page() {
  const { data, error, isLoading } = useSWR("/api/users/unverified", fetcher);

  if (error)
    return <Typography>Something went wrong fetching users</Typography>;
  if (isLoading) return <CircularProgress />;

  
  return (
    <div>
      <Typography variant="h6">Unverified users</Typography>
      <Divider sx={{ my: 2 }} />

      {data.map((user) => {
        return <UnverifiedUser profile={user} />
      })}

    </div>
  );
}
