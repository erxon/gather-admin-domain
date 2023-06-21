import { Box, CircularProgress, Button } from "@mui/material";
import EditProfileDetails from "@/components/profile/EditProfile/EditProfileDetails";
import ChangePassword from "@/components/profile/EditProfile/ChangePassword";
import DeleteModal from "@/components/profile/EditProfile/DeleteModal";
import { useUser } from "@/utils/auth/hooks";
import { useState } from "react";

export default function Page() {
  //Profile picture
  //First Name, Last Name
  //Contact number
  //Email
  //Change password
  const [user, { loading, mutate }] = useUser();
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  if (loading) return <CircularProgress />;
  console.log(user);

  return (
    <Box>
      <DeleteModal
        open={open}
        id={user._id}
        username={user.username}
        mutateUser={mutate}
        handleClose={handleClose}
      />
      <Box sx={{ mb: 4 }}>
        <EditProfileDetails user={user} />
      </Box>
      <Box>
        <ChangePassword user={user} />
      </Box>
      <Button
        onClick={() => {
          setOpen(true);
        }}
        sx={{ mt: 4 }}
        variant="outlined"
        color="error"
      >
        Delete
      </Button>
    </Box>
  );
}
