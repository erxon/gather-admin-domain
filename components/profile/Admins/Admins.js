import useSWR from "swr";
import { fetcher } from "@/utils/auth/hooks";
import {
  Box,
  CircularProgress,
  Divider,
  Typography,
  Button,
  Stack,
} from "@mui/material";
import Admin from "./Admin";
import Form from "./Form";
import StackRowLayout from "@/components/StackRowLayout";
import { useState } from "react";

import AddIcon from '@mui/icons-material/Add';

export default function Admins(props) {
  const { data, error, isLoading } = useSWR("/api/admin", fetcher);
  const [showForm, setShowForm] = useState(false);

  if (error)
    return <Typography>Something went wrong while fetching admins.</Typography>;
  if (isLoading) return <CircularProgress />;

  const handleClick = () => {
    setShowForm(true);
  };

  const handleCancel = () => {
    setShowForm(false);
  };

  //Do not display the authenticated user
  return (
    <Box>
      <StackRowLayout spacing={2}>
        <Typography variant="body1">Administrators</Typography>
        <StackRowLayout spacing={0.5}>
          <Button startIcon={<AddIcon />} onClick={handleClick} variant="contained">
            Add
          </Button>
          {showForm && (
            <Button variant="outlined" onClick={handleCancel}>
              Cancel
            </Button>
          )}
        </StackRowLayout>
      </StackRowLayout>
      {showForm && (
        <Box sx={{ mt: 3 }}>
          <Form />
        </Box>
      )}

      <Divider sx={{ my: 2 }} />
      {data
        .filter((admin) => {
          return admin.username !== props.user;
        })
        .map((admin) => {
          return (
            <Admin
              key={admin._id}
              id={admin._id}
              firstName={admin.firstName}
              lastName={admin.lastName}
              username={admin.username}
              createdAt={admin.createdAt}
            />
          );
        })}
        <pre>{JSON.stringify(data, null, 2)}</pre>
    </Box>
  );
}
