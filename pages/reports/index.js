//Imports #Material UI
import { Box, CircularProgress, Typography } from "@mui/material";

//Imports #Helpers
import addID from "@/utils/addID";
import Table from "@/components/reports/Table";

//Imports #Hooks
import useSWR from "swr";
import { fetcher } from "@/utils/auth/hooks";




export default function Page() {
  const { data, mutate, error, isLoading } = useSWR('/api/reports', fetcher);

  if(error) return <Typography>Something went wrong fetching reports.</Typography>
  if (isLoading) return <CircularProgress />

  const result = addID(data);

  return (
    <div>
      <Box>
        <Table reports={result} />
      </Box>
    </div>
  );
}
