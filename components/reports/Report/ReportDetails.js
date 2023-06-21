import {Box, Typography} from '@mui/material'
import PersonIcon from "@mui/icons-material/Person";
import PlaceIcon from '@mui/icons-material/Place';
import StackRowLayout from "../../StackRowLayout";

export default function ReportDetails(props) {
  return (
    <Box sx={{ width: "100%" }}>
      <Typography variant="body1" sx={{ fontWeight: "bold", mb: 1 }}>
        {props.name}
      </Typography>
      <StackRowLayout spacing={0.5}>
        <PersonIcon color="disabled" />
        <Typography variant="subtitle2" color="GrayText">
          {props.gender}, {props.age}
        </Typography>
      </StackRowLayout>
      <StackRowLayout spacing={0.5}>
        <PlaceIcon color="disabled" />
        <Typography variant="subtitle2" color="GrayText">
          {props.lastSeen}
        </Typography>
      </StackRowLayout>
    </Box>
  );
}
