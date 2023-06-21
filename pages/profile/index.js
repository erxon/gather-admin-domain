
import {Box, CircularProgress} from "@mui/material";
import ProfileCard from "@/components/profile/ProfileCard/ProfileCard";
import { useUser } from "@/utils/auth/hooks";

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
    </Box>
  );
}
