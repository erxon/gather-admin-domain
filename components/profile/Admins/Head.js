import { Box, Typography, IconButton, Menu, MenuItem} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import StackRowLayout from "@/components/StackRowLayout";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Head(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const router = useRouter();
  
  const open = Boolean(anchorEl)

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };


  return (
    <Box>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={() => {router.push(`/profile/edit/${props.id}`)}}>Edit</MenuItem>
        <MenuItem onClick={handleClose}>Delete</MenuItem>
      </Menu>
      <StackRowLayout spacing={0.5}>
        <Box sx={{ width: "100%" }}>
          <StackRowLayout spacing={0.5}>
            <PersonIcon color="disabled" />
            <Typography variant="subtitle2" color="GrayText">
              {props.username}
            </Typography>
          </StackRowLayout>
        </Box>
        <IconButton onClick={handleClick}>
          <MoreVertIcon />
        </IconButton>
      </StackRowLayout>
    </Box>
  );
}
