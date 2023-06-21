import {
  Box,
  CircularProgress,
  Divider,
  Typography,
} from "@mui/material";
import Head from "@/components/reports/Archives/Head";
import Report from "@/components/reports/Report/Report";
//Imports #Hooks
import useSWR from "swr";
import { fetcher } from "@/utils/auth/hooks";

export default function Page() {
  const { data, mutate, error, isLoading } = useSWR("/api/archives", fetcher);

  if (error)
    return (
      <Typography>Something went wrong while fetching archives.</Typography>
    );
  if (isLoading) return <CircularProgress />;
  console.log(data)
  return (
    <Box>
      <Head />
      <Divider sx={{ my: 2 }} />
      {data.length === 0 ? (
        <Typography color="GrayText" variant="body2">
          No archived reports.
        </Typography>
      ) : (
        data.map((item) => {
            return <Report 
                name={`${item.report.firstName} ${item.report.lastName}`}
                mutate={mutate}
                data={data}
                key={item._id}
                id={item._id}
                reportId={item.report._id}
                age={item.report.age}
                gender={item.report.gender}
                lastSeen={item.report.lastSeen}
            />
        })
      )}
    </Box>
  );
}
