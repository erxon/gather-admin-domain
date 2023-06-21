
import {Box, CircularProgress, IconButton} from "@mui/material";
import ProfileCard from "@/components/profile/ProfileCard/ProfileCard";
import { useUser } from "@/utils/auth/hooks";
import Admins from "@/components/profile/Admins/Admins";

export default function Page() {
  const [user, {loading}] = useUser();

  if (loading) return <CircularProgress />

  return (
    <Box>
      <ProfileCard
        username={user.username}
        type={user.type}
        name={`${user.firstName} ${user.lastName}`}
        contactNumber={user.contactNumber}
        email={user.email}
      />
      <Box sx={{my: 3}}>
        <Admins user={user.username} />
      </Box>
    </Box>
  );
}
