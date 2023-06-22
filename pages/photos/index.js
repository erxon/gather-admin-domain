import { Box, Typography, Divider, CircularProgress } from "@mui/material";
import PhotosTabs from "@/components/photos/PhotosTabs";
import DisplayPhotos from "@/components/photos/DisplayPhotos";
import { useState } from "react";

export default function Page() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Typography variant="h6">Photos</Typography>
      <Divider sx={{ my: 2 }} />
      <PhotosTabs value={value} handleChange={handleChange} />
      <DisplayPhotos filter={value} />
    </Box>
  );
}
