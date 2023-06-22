import { CircularProgress, Paper, Typography } from "@mui/material";
import { fetcher } from "@/utils/auth/hooks";
import useSWR from "swr";

export default function NumberOfActiveReports() {
  const { data, error, isLoading } = useSWR("/api/reports", fetcher);

  if (error) return <Typography>Something went wrong fetching reports.</Typography>
  if (isLoading) return <CircularProgress />

  const activeCases = data.filter((report) => {
    return report.status === 'active'
  })
  return (
    <Paper variant="outlined" sx={{ p: 3, height: 75 }}>
      <Typography variant="body1" sx={{ fontWeight: "bold" }}>
        Number of active cases
      </Typography>
      <Typography>{activeCases.length} Cases</Typography>

    </Paper>
  );
}
