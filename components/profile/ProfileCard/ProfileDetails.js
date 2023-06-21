import { Stack, Typography, Chip, Box } from "@mui/material";
import StackRowLayout from "@/components/StackRowLayout";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";

export default function ProfileDetails(props) {
  return (
    <div>
      <StackRowLayout spacing={0.75}>
        <Typography variant="h6">
          {props.name !== '' ? props.name : 'Hello Admin'}
        </Typography>
        <Chip size="small" label={props.type} color="primary" />
      </StackRowLayout>
      <Typography variant="subtitle1" color="grayText">
        {props.username}
      </Typography>
    </div>
  );
}
