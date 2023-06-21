import {
  Paper,
} from "@mui/material";

import StackRowLayout from "../../StackRowLayout";
import ReportDetails from "./ReportDetails";
import Actions from "./Actions";

export default function Report(props) {
  return (
    <Paper sx={{ width: 400, p: 2 }} variant="outlined">
      <StackRowLayout spacing={1}>
        <ReportDetails
          name={props.name}
          age={props.age}
          gender={props.gender}
          lastSeen={props.lastSeen}
        />
        <Actions mutate={props.mutate} itemId={props.id} reportId={props.reportId} />
      </StackRowLayout>
    </Paper>
  );
}
