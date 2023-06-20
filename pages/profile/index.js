import { user } from "@/utils/data/data";
import {Box} from "@mui/material";
import ProfileCard from "@/components/profile/ProfileCard/ProfileCard";

export default function Page() {
  return (
    <Box>
      <ProfileCard
        photo={user.photo}
        username={user.username}
        firstName={user.firstName}
        lastName={user.lastName}
        type={user.type}
        contactNumber={user.contactNumber}
        email={user.email}
      />
    </Box>
  );
}
