// components/topBar/TopBar.jsx
import { useEffect, useState } from "react";
import { AppBar, Toolbar, Typography, Box, Chip, Button } from "@mui/material";
import { useLocation } from "react-router-dom";
import axios from "axios";

function TopBar({ loggedInUser, onLogout }) {
  const [context, setContext] = useState("Photo Sharing App");
  const [version, setVersion] = useState("");
  const location = useLocation();

  // Fetch schema version once
  useEffect(() => {
    const fetchVersion = async () => {
      try {
        const response = await axios.get("/test/info");
        setVersion(`Photo Sprint App ${response.data.__v}`);
      } catch (error) {
        console.error("Error fetching schema info:", error);
      }
    };
    fetchVersion();
  }, []);

  // Update center context text based on route (same logic you had before)
  useEffect(() => {
    const fetchContext = async () => {
      const path = location.pathname;

      if (path === "/" || path === "/users") {
        setContext("Photo Sharing App");
        return;
      }

      if (path.startsWith("/users/") || path.startsWith("/photos/")) {
        const userId = path.split("/")[2];
        try {
          const response = await axios.get(`/user/${userId}`);
          const user = response.data;
          if (path.startsWith("/users/")) {
            setContext(`${user.first_name} ${user.last_name}`);
          } else {
            setContext(`Photos of ${user.first_name} ${user.last_name}`);
          }
        } catch (error) {
          console.error("Error fetching user:", error);
          setContext(path.startsWith("/users/") ? "User Details" : "User Photos");
        }
      } else if (path.startsWith("/login-register")) {
        setContext("Please Login or Register");
      }
    };

    fetchContext();
  }, [location]);

  const handleLogoutClick = async () => {
    try {
      await axios.post("/admin/logout");
    } catch (err) {
      console.error("Error during logout:", err);
    } finally {
      if (onLogout) {
        onLogout();
      }
    }
  };

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(255,255,255,0.2)",
      }}
    >
      <Toolbar sx={{ py: 1.5 }}>
        {/* Left: app title */}
        <Typography
          variant="h6"
          component="div"
          sx={{ fontWeight: 600, letterSpacing: "-0.5px" }}
        >
          Monish Munagala
        </Typography>

        {/* Center: context */}
        <Box sx={{ flexGrow: 1, textAlign: "center" }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 300,
              letterSpacing: "0.5px",
              textShadow: "0 2px 10px rgba(0,0,0,0.1)",
            }}
          >
            {context}
          </Typography>
        </Box>

        {/* Right: login status + version */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
          {loggedInUser ? (
            <>
              <Typography variant="body1">Hi {loggedInUser.first_name}</Typography>
              <Button
                color="inherit"
                size="small"
                onClick={handleLogoutClick}
                sx={{ textTransform: "none" }}
              >
                Logout
              </Button>
            </>
          ) : (
            <Typography variant="body2">Please login</Typography>
          )}

          <Chip
            label={version}
            size="small"
            sx={{
              bgcolor: "rgba(255,255,255,0.2)",
              color: "white",
              fontWeight: 500,
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255,255,255,0.3)",
            }}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;
