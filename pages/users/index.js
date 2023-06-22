//Import #Material UI
import { Box, CircularProgress, Typography } from "@mui/material";

//Import #Hooks
import useSWR from "swr";
import { fetcher } from "@/utils/auth/hooks";

//Import #Components
import Table from "@/components/users/Table";

function addID(data) {
  let index = -1;
  const newArray = data.map((document) => {
    index = index + 1;
    return { ...document, id: index };
  });

  return newArray;
}

export default function Page() {
  //fetch all users
  const { data, mutate, error, isLoading } = useSWR("/api/users", fetcher);

  if (error)
    return <Typography>Something went wrong while fetching users.</Typography>;
  if (isLoading) return <CircularProgress />;

  const result = addID(data);

  return (
    <div>
      <Table users={result} />
    </div>
  );
}
