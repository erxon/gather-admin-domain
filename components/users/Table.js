"use client";
import { Box, Button, Typography, Stack, Chip } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

//Imports #Icons
import LocalPoliceIcon from "@mui/icons-material/LocalPolice";
import PeopleIcon from "@mui/icons-material/People";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import InfoIcon from "@mui/icons-material/Info";

//Imports #Hooks
import Router from "next/router";

const columns = [
  { field: "id", headerName: "Index", width: 50 },
  {
    field: "_id",
    headerName: "Database ID",
    width: 350,
    renderCell: (params) => (
      <Stack direction="row" spacing={1}>
        <Typography sx={{ width: 250 }} variant="subtitle1">
          {params.value}
        </Typography>
        <Button
          onClick={() => {
            Router.push(
              `https://gather-plum.vercel.app/profile/${params.value}`
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
    field: "username",
    headerName: "Username",
    width: 150,
    editable: true,
  },
  {
    field: "status",
    headerName: "Status",
    width: 150,
    renderCell: (params) =>
      params.value === "verified" ? (
        <Chip icon={<CheckCircleIcon />} color="success" label={params.value} />
      ) : (
        <Chip icon={<InfoIcon />} color="info" label={params.value} />
      ),
  },
  {
    field: "type",
    headerName: "Type",
    width: 150,
    renderCell: (params) =>
      params.value === "authority" ? (
        <Chip
          icon={<LocalPoliceIcon />}
          color="secondary"
          label={params.value}
        />
      ) : (
        <Chip icon={<PeopleIcon />} color="primary" label={params.value} />
      ),
  },
  {
    field: "email",
    headerName: "Email",
    width: 150,
    editable: true,
  },
  {
    field: "contactNumber",
    headerName: "Contact Number",
    width: 150,
    editable: true,
  },
];

export default function Table(props) {
  return (
    <Box sx={{height: 500, width: "100%" }}>
      <DataGrid
        autoHeight
        rows={props.users}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        sx={{

          "& .MuiDataGrid-cell:hover": {
            color: "primary.main",
          },
        }}
        pageSizeOptions={[10]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}
