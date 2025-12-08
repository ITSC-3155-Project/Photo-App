// src/App.jsx
import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Grid } from "@mui/material";

import TopBar from "./components/topBar/TopBar.jsx";
import UserList from "./components/userList/userList.jsx";
import UserDetail from "./components/userDetail/userDetail.jsx";
import UserPhotos from "./components/userPhotos/userPhotos.jsx";
import LoginRegister from "./components/loginRegister/loginRegister.jsx";

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);

  const isLoggedIn = !!loggedInUser;

  const handleLogin = (user) => {
    setLoggedInUser(user);
  };

  const handleLogout = () => {
    setLoggedInUser(null);
  };

  return (
    <div>
      <TopBar loggedInUser={loggedInUser} onLogout={handleLogout} />

      <Grid container>
        {/* Left column: user list – only when logged in */}
        <Grid item xs={3}>
          {isLoggedIn && <UserList />}
        </Grid>

        {/* Right column: main view */}
        <Grid item xs={9}>
          <Routes>
            {/* Login / register page */}
            <Route
              path="/login-register"
              element={
                isLoggedIn ? (
                  <Navigate to={`/users/${loggedInUser._id}`} replace />
                ) : (
                  <LoginRegister
                    onLogin={handleLogin}
                    setLoggedInUser={setLoggedInUser}
                  />
                )
              }
            />

            {/* User detail – protected */}
            <Route
              path="/users/:userId"
              element={
                isLoggedIn ? (
                  <UserDetail />
                ) : (
                  <Navigate to="/login-register" replace />
                )
              }
            />

            {/* User photos – protected */}
            <Route
              path="/photos/:userId"
              element={
                isLoggedIn ? (
                  <UserPhotos />
                ) : (
                  <Navigate to="/login-register" replace />
                )
              }
            />

            {/* Default route */}
            <Route
              path="/"
              element={
                isLoggedIn ? (
                  <Navigate to={`/users/${loggedInUser._id}`} replace />
                ) : (
                  <Navigate to="/login-register" replace />
                )
              }
            />
          </Routes>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
