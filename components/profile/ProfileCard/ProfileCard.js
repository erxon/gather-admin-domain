import { Paper, Box, Button, IconButton } from "@mui/material";
import ProfileAvatar from "./ProfileAvatar";
import ProfileDetails from "./ProfileDetails";
import DeleteIcon from "@mui/icons-material/Delete";
import { useRouter } from "next/navigation";

export default function ProfileCard(props) {
  const router = useRouter();

  return (
    <Paper sx={{ maxWidth: "350px", p: 2 }}>
      <Box sx={{ display: "flex" }}>
        <ProfileAvatar publicId={props.photo} />
        <Box sx={{ ml: 2 }}>
          <ProfileDetails
            username={props.username}
            firstName={props.firstName}
            lastName={props.lastName}
            type={props.type}
            contactNumber={props.contactNumber}
            email={props.email}
          />
          <Box sx={{ mt: 1.5 }}>
            <Button
              onClick={() => {
                router.push("/profile/edit");
              }}
              color="secondary"
              size="small"
              variant="contained"
            >
              Edit
            </Button>
            <IconButton sx={{ ml: 1 }}>
              <DeleteIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
}
