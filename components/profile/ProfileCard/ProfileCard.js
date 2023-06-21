import { Paper, Box, Button, IconButton } from "@mui/material";
import ProfileDetails from "./ProfileDetails";
import { useRouter } from "next/navigation";

export default function ProfileCard(props) {
  const router = useRouter();

  return (
    <Paper sx={{ maxWidth: "350px", p: 2 }}>
      <Box sx={{ display: "flex" }}>
        <Box sx={{ ml: 2 }}>
          <ProfileDetails
            username={props.username}
            name={props.name}
            type={"admin"}
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
          </Box>
        </Box>
      </Box>
    </Paper>
  );
}
