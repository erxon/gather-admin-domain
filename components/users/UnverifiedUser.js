import { Paper, Box, Typography, Button } from "@mui/material";
import ProfileAvatar from "../profile/ProfileCard/ProfileAvatar";
import StackRowLayout from "../StackRowLayout";
import elapsedTime from "@/utils/elapsedTime";

export default function UnverifiedUser({ profile, profileToExpand }) {
  const createdAt = new Date(profile.createdAt).toDateString();
  let timeElapsedSinceAccountCreated = elapsedTime(createdAt)

  return (
    <div>
      <Paper variant="outlined" sx={{ width: 350, p: 3 }}>
        <StackRowLayout spacing={2}>
          <ProfileAvatar publicId={profile.photo} />
          
          <Box sx={{width: '100%'}}>
            <Typography
              variant="body1"
              sx={{ fontWeight: "bold" }}
            >{`${profile.firstName} ${profile.lastName}`}</Typography>
            <Typography color="GrayText" variant="body2">{timeElapsedSinceAccountCreated}</Typography>
          </Box>
          <Button onClick={() => {profileToExpand(profile)}} variant="contained">expand</Button>
        </StackRowLayout>
      </Paper>
    </div>
  );
}
