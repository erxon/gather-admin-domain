import { Box, Tabs, Tab } from "@mui/material";

export default function PhotosTabs(props) {
  return (
    <div>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={props.value}
          onChange={props.handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="All" />
          <Tab label="References" />
          <Tab label="Query" />
        </Tabs>
      </Box>
    </div>
  );
}
