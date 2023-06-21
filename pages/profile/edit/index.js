import {
    CircularProgress,
    Button,
    Paper,
  } from "@mui/material";
  import EditProfileDetails from "@/components/profile/EditProfile/EditProfileDetails";
  import ChangePassword from "@/components/profile/EditProfile/ChangePassword";
  import DeleteModal from "@/components/profile/EditProfile/DeleteModal";
  import { useUser } from "@/utils/auth/hooks";
  import { useState } from "react";
  

  import Layout from "@/components/profile/Layout";
  
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
      <Layout>
        <DeleteModal
          open={open}
          id={user._id}
          username={user.username}
          mutateUser={mutate}
          handleClose={handleClose}
        />
        <Paper variant="outlined" sx={{ mb: 4, p: 3 }}>
          <EditProfileDetails user={user} />
        </Paper>
        <Paper variant="outlined" sx={{ mb: 3, p: 3 }}>
          <ChangePassword user={user} />
        </Paper>
        <Paper  variant="outlined" sx={{ p: 3 }}>
          <Button
            onClick={() => {
              setOpen(true);
            }}
            variant="outlined"
            color="error"
          >
            Delete
          </Button>
        </Paper>
      </Layout>
    );
  }
  