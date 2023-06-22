import { CircularProgress, Divider, Grid, Typography } from "@mui/material";
import UnverifiedUser from "@/components/users/UnverifiedUser";
import useSWR from "swr";
import { fetcher } from "@/utils/auth/hooks";
import { useState } from "react";

import UnverifiedUserProfile from "@/components/users/UnverifiedUserProfile";

export default function Page() {
  const [profileToExpand, setProfileToExpand] = useState(null);
  const { data, error, isLoading } = useSWR("/api/users/unverified", fetcher);

  if (error)
    return <Typography>Something went wrong fetching users</Typography>;
  if (isLoading) return <CircularProgress />;

  return (
    <div>
      <Typography variant="h6">Unverified users</Typography>
      <Divider sx={{ my: 2 }} />
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          {data.map((user) => {
            return (
              <UnverifiedUser
                profile={user}
                profileToExpand={setProfileToExpand}
              />
            );
          })}
        </Grid>
        <Grid item xs={12} md={8}>
          {profileToExpand && <UnverifiedUserProfile profile={profileToExpand} />}
        </Grid>
      </Grid>

      
    </div>
  );
}
