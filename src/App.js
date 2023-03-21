import "./styles/App.css";
import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Home } from "./pages/Home";
import { Tables } from "./pages/Tables";
import { Profile } from "./pages/Profile";
import SignInSignUp from "./pages/SignInSignUp";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import { AnimatedBackground } from "./components/Background";
import { getApiData, handleLogout } from "./utils/httpClient";
import useToken from "./utils/UseToken";
import { Chart, registerables } from "chart.js";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

function App() {
  /* Welcome to the Main Application for Component Collection. This component acts as the controller handling
   user authentication, login/logout, and API fetching. */

  Chart.register(...registerables);
  const navigate = useNavigate();
  const { token, removeToken, setToken } = useToken();
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "1px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const [apiData, setApiData] = useState({});

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleLogout = () => {
    handleClose();
    removeToken();
    navigate("/");
  };
  useEffect(() => {
    /* A JWT 'token' is assigned to users after logging in with expiration of 2 hours. We check for this token here. */
    if (token && token !== "" && token !== undefined) {
      getApiData("profile")
        .then((res) => {
          setApiData(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      removeToken();
      navigate("/");
    }
  }, [token]);
  return (
    <div className="App">
      <body>
        <div>
          <AnimatedBackground />
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography
                id="modal-modal-description"
                variant="h6"
                component="h2"
              >
                Are you sure you want to logout?
              </Typography>
              <div class="grid grid-cols-2 gap-8 mt-5">
                <button class="p-3 text-white rounded-xl bg-red-500" onClick={handleLogout}>Yes</button>
                <button class="p-3 text-white rounded-xl bg-slate-500" onClick={handleClose}>No</button>
              </div>
            </Box>
          </Modal>
          {apiData && token && token !== "" && token !== undefined ? (
            <div>
              <ResponsiveAppBar
                removeToken={removeToken}
                navigate={navigate}
                handleOpen={handleOpen}
              />
              <div class="lg:ml-36 lg:mr-36 md:ml-20 md:mr-20 sm:ml-6 sm:mr-6">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route
                    path="/tables"
                    element={<Tables apiData={apiData} />}
                  />
                  <Route path="/profile" element={<Profile />} />
                </Routes>
              </div>
            </div>
          ) : (
            <div>
              <Routes>
                <Route
                  path="/"
                  exact
                  element={<SignInSignUp setToken={setToken} />}
                />
              </Routes>
            </div>
          )}
        </div>
      </body>
    </div>
  );
}

export default App;
