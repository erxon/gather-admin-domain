import {
    Box,
    ListItem,
    List,
    Drawer,
    ListItemButton,
    ListItemText,
    ListItemIcon,
    AppBar,
    Typography,
    IconButton,
    Toolbar,
    Divider,
  } from "@mui/material";
  import Link from "next/link";
  import { useRouter } from "next/navigation";
  import React, { Component, useState } from "react";
  import AccountCircleIcon from "@mui/icons-material/AccountCircle";
  import GroupIcon from "@mui/icons-material/Group";
  import ArticleIcon from "@mui/icons-material/Article";
  import PhotoIcon from "@mui/icons-material/Photo";
  import MenuIcon from "@mui/icons-material/Menu";
  
  const drawerWidth = 240;
  function LayoutListItem(props) {
    const router = useRouter();
    return (
      <ListItem>
        {" "}
        <ListItemButton
          onClick={() => {
            router.push(props.route);
          }}
        >
          <ListItemIcon>{props.icon}</ListItemIcon>
          <ListItemText primary={props.text} />
        </ListItemButton>
      </ListItem>
    );
  }
  
  function LayoutDrawer(props) {
    const drawer = (
      <div>
        <List>
          <LayoutListItem
            route="/profile"
            text="Profile"
            icon={<AccountCircleIcon />}
          />
          <LayoutListItem route="/users" text="Users" icon={<GroupIcon />} />
          <LayoutListItem
            route="/reports"
            text="Reports"
            icon={<ArticleIcon />}
          />
          <LayoutListItem route="/photos" text="Photos" icon={<PhotoIcon />} />
        </List>
      </div>
    );
    return (
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="links"
      >
        <Drawer
          variant="temporary"
          open={props.mobileOpen}
          onClose={() => {
            props.drawerToggle();
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
          }}
        >
          <Typography sx={{ pl: 4.5, pt: 2, pb: 2 }} variant="h5">
            Gather
          </Typography>
          <Divider />
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
          }}
          open
        >
          <Typography sx={{ pl: 4.5, pt: 2, pb: 2 }} variant="h5">
            Gather
          </Typography>
          <Divider />
          {drawer}
        </Drawer>
      </Box>
    );
  }
  
  function LayoutAppBar(props) {
    return (
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={() => {
              props.drawerToggle();
            }}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Admin
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
  
  export default function Layout({children}) {
    const [mobileOpen, setMobileOpen] = useState(false);
  
    const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
    };
    return (
      <Box sx={{ display: "flex" }}>
        <LayoutDrawer mobileOpen={mobileOpen} drawerToggle={handleDrawerToggle} />
        <LayoutAppBar drawerToggle={handleDrawerToggle} />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            marginTop:"75px",
          }}
        >
          {children}
        </Box>
      </Box>
    );
  }
  