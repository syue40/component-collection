import "./styles/App.css";
import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import  Home  from "./pages/Home";
import { Tables } from "./pages/Tables";
import { Profile } from "./pages/Profile";
import SignInSignUp from "./pages/SignInSignUp";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import { AnimatedBackground } from "./components/Background";
import { getApiData } from "./utils/httpClient";
import useToken from "./utils/UseToken";
import { Chart, registerables } from "chart.js";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useIdleTimer } from "react-idle-timer";
import { ResetPassword } from "./pages/ResetPassword";
import { ResetPasswordPost } from "./pages/ResetPasswordPost";
import BrowseMovies from "./pages/BrowseMovies";
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
    setRemaining(1);
    removeToken();
    navigate("/");
    alert("You have been logged out.");
  };

  const [state, setState] = useState("Active");
  const [count, setCount] = useState(0);
  const [remaining, setRemaining] = useState(1);

  const onIdle = () => {
    setState("Idle");
  };

  const onActive = () => {
    setState("Active");
  };

  const onAction = () => {
    setCount(count + 1);
  };

  const { getRemainingTime } = useIdleTimer({
    onIdle,
    onActive,
    onAction,
    timeout: 1_000_000,
    throttle: 500,
  });

  useEffect(() => {
    if (remaining === 0) {
      handleLogout();
    }
  });

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
      const interval = setInterval(() => {
        setRemaining(Math.ceil(getRemainingTime() / 1000));
      }, 500);

      return () => {
        clearInterval(interval);
      };
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
          {apiData && token && token !== "" && token !== undefined ? (
            <div>
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
                    <button
                      class="p-3 text-white rounded-xl bg-red-500"
                      onClick={handleLogout}
                    >
                      Yes
                    </button>
                    <button
                      class="p-3 text-white rounded-xl bg-slate-500"
                      onClick={handleClose}
                    >
                      No
                    </button>
                  </div>
                </Box>
              </Modal>
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
                  <Route
                  path="/browse"
                  element={<BrowseMovies movies={apiData.movies}/>}
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
                <Route
                path="/reset-password"
                element={<ResetPassword />}/>
                <Route
                  path="/reset-password-post/:jwt"
                  element={<ResetPasswordPost />}
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
