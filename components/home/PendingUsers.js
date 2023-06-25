import { Box, Divider, IconButton, Stack, Typography, Badge } from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import StackRowLayout from "../StackRowLayout";
import { useState } from "react";

import useSWR from "swr";

export default function PendingUsers() {
  const [expand, setExpand] = useState(false);
  const handleExpand = () => {
    setExpand(!expand);
  };

  return (
    <div>
      <Box sx={{ p: 3 }}>
        <StackRowLayout spacing={2}>
          <Badge color="secondary" badgeContent={10} showZero>
            <Typography sx={{ fontWeight: "bold", p: 1 }}>
              Authorities that need to be verified
            </Typography>
          </Badge>
          <IconButton onClick={handleExpand}>
            {expand ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </IconButton>
        </StackRowLayout>
        
      </Box>
      <Divider />
    </div>
  );
}
