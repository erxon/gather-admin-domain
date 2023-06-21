import { Box, Stack, Button, Typography, Chip } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

import Router from "next/router";

const columns = [
  { field: "id", headerName: "Index", width: 50 },
  {
    field: "_id",
    headerName: "Database ID",
    width: 350,
    renderCell: (params) => (
      <Stack direction="row" spacing={1} alignItems="center">
        <Typography variant="subtitle1" sx={{ width: 250 }}>
          {params.value}
        </Typography>
        <Button
          onClick={() => {
            Router.push(
              `https://gather-plum.vercel.app/reports/${params.value}`
            );
          }}
          size="small"
          variant="contained"
        >
          View
        </Button>
      </Stack>
    ),
  },

  {
    field: "status",
    headerName: "Status",
    width: 150,
    editable: true,
    renderCell: (params) => (
      <div>
        {params.value === "active" ? (
          <Chip color="success" label={params.value} />
        ) : (
          <Chip color="info" label={params.value} />
        )}
      </div>
    ),
  },
  {
    field: "firstName",
    headerName: "First name",
    width: 150,
    editable: true,
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 150,
    editable: true,
  },
  {
    field: "features",
    headerName: "Features",
    width: 150,
    editable: true,
  },
  {
    field: "age",
    headerName: "Age",
    width: 100,
    editable: true,
  },
  {
    field: "gender",
    headerName: "Gender",
    width: 100,
    editable: true,
  },
  {
    field: "lastSeen",
    headerName: "Last Seen",
    width: 150,
    editable: true,
  },
  {
    field: "username",
    headerName: "Reporter",
    width: 150,
    editable: true,
  },
];

export default function Table(props) {
  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        autoHeight
        rows={props.reports}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}
