import "./styles/App.css";
import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Home } from "./pages/Home";
import { Tables } from "./pages/Tables";
import { Profile } from "./pages/Profile";
import SignInSignUp from "./pages/SignInSignUp"
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import { AnimatedBackground } from "./components/Background";
import { getApiData } from "./utils/httpClient";
import useToken from "./utils/UseToken";
import { Chart, registerables } from 'chart.js';

function App() {
  Chart.register(...registerables);
  const [apiData, setApiData] = useState({});
  const navigate = useNavigate();
  const { token, removeToken, setToken } = useToken();
  useEffect(() => {
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
      alert("User Logged Out")
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
              <ResponsiveAppBar removeToken={removeToken} navigate={navigate}/>
              <div class="lg:ml-36 lg:mr-36 md:ml-20 md:mr-20 sm:ml-6 sm:mr-6">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route
                    path="/tables"
                    element={<Tables apiData={apiData} />}
                  />
                  <Route path="/profile" element={<Profile />}/>
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
