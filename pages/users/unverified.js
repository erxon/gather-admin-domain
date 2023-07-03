import { CircularProgress, Divider, Grid, Typography } from "@mui/material";
import UnverifiedUser from "@/components/users/unverified/UnverifiedUser";
import useSWR from "swr";
import { fetcher } from "@/utils/auth/hooks";
import { useState } from "react";

import UnverifiedUserProfile from "@/components/users/unverified/UnverifiedUserProfile";

export default function Page() {
  const [profileToExpand, setProfileToExpand] = useState(null);
  const { data, error, isLoading } = useSWR("/api/users/unverified", fetcher);

  if (error)
    return <Typography>Something went wrong fetching users</Typography>;
  if (isLoading) return <CircularProgress />;
console.log(data)
  return (
    <div>
      <Typography variant="h6">Unverified users</Typography>
      <Divider sx={{ my: 2 }} />
      <Grid container spacing={2}>

        {data.length > 0 ? (
          <Grid item xs={12} md={4}>
            {data.map((user) => {
              return (
                <UnverifiedUser
                  key={user._id}
                  profile={user}
                  profileToExpand={setProfileToExpand}
                />
              );
            })}
          </Grid>
        ) : (<Typography sx={{p: 3}} variant="body1" color="GrayText">There were no unverified users.</Typography>)}
        <Grid item xs={12} md={8}>
          {profileToExpand && (
            <UnverifiedUserProfile profile={profileToExpand} />
          )}
        </Grid>
      </Grid>
    </div>
  );
}
