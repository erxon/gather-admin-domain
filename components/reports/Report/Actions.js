import { Box, Tooltip, IconButton, Button } from "@mui/material";
import UnarchiveIcon from "@mui/icons-material/Unarchive";
import StackRowLayout from "../../StackRowLayout";
import { useRouter } from "next/router";

import unarchiveHelper from "../unarchiveHelper";

export default function Actions(props) {
  const router = useRouter();

  const handleUnarchive = async () => {
    const result = await unarchiveHelper(props.reportId, props.itemId)
    props.mutate()
  }

  return (
    <Box>
      <StackRowLayout spacing={2}>
        <Tooltip title="Unarchive">
          <IconButton onClick={handleUnarchive}>
            <UnarchiveIcon />
          </IconButton>
        </Tooltip>
        <Button onClick={() => {router.push(`https://gather-plum.vercel.app/reports/${props.reportId}`)}} size="small" variant="contained">
          View
        </Button>
      </StackRowLayout>
    </Box>
  );
}
