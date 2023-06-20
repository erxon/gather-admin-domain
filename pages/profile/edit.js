

import { Box, CircularProgress } from "@mui/material";
import ChangePhoto from "../components/EditProfile/ChangePhoto";
import EditProfileDetails from "../components/EditProfile/EditProfileDetails";
import ChangePassword from "../components/EditProfile/ChangePassword";
import { useUser } from "@/utils/auth/hooks";

export default function Page() {
  //Profile picture
  //First Name, Last Name
  //Contact number
  //Email
  //Change password
  const [user, {loading}] = useUser();
  if (loading) return <CircularProgress />
  return (
    <Box>
      {/* <ChangePhoto publicId={user.photo} /> */}
      <Box sx={{mt: 2}}>
        <EditProfileDetails user={user} />
      </Box>
      <Box sx={{mt: 2}}>
        <ChangePassword user={user} />
      </Box>
    </Box>
  );
}
