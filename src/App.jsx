import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import "./styles/main.css";

import TopBar from "./components/topBar/TopBar.jsx";
import UserList from "./components/userList/userList.jsx";
import UserDetail from "./components/userDetail/userDetail.jsx";
import UserPhotos from "./components/userPhotos/userPhotos.jsx";
import LoginRegister from "./components/loginRegister/loginRegister.jsx";

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);

  return (
    <div className="cs142-main">
      <TopBar
        loggedInUser={loggedInUser}
        setLoggedInUser={setLoggedInUser}
      />

      <div className="cs142-content">
        <Routes>
          {/* Login/register is always reachable */}
          <Route
            path="/login-register"
            element={<LoginRegister setLoggedInUser={setLoggedInUser} />}
          />

          {/* Everything below this requires login */}
          {loggedInUser ? (
            <>
              <Route
                path="/users/:userId"
                element={
                  <div className="cs142-main-content">
                    <div className="cs142-left-pane">
                      <UserList />
                    </div>
                    <div className="cs142-right-pane">
                      <UserDetail />
                    </div>
                  </div>
                }
              />

              <Route
                path="/photos/:userId"
                element={
                  <div className="cs142-main-content">
                    <div className="cs142-left-pane">
                      <UserList />
                    </div>
                    <div className="cs142-right-pane">
                      <UserPhotos />
                    </div>
                  </div>
                }
              />

              <Route
                path="/users"
                element={
                  <div className="cs142-main-content">
                    <div className="cs142-left-pane">
                      <UserList />
                    </div>
                    <div className="cs142-right-pane">
                      <div>Please select a user.</div>
                    </div>
                  </div>
                }
              />

              {/* Default when logged in: go to own user page */}
              <Route
                path="*"
                element={<Navigate to={`/users/${loggedInUser._id}`} replace />}
              />
            </>
          ) : (
            // If not logged in, force any route to login-register
            <Route path="*" element={<Navigate to="/login-register" replace />} />
          )}
        </Routes>
      </div>
    </div>
  );
}

export default App;
