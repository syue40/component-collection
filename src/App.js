import "./styles/App.css";
import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Home } from "./pages/Home";
import { Charts } from "./pages/Charts";
import { Tables } from "./pages/Tables";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import { AnimatedBackground } from "./components/Background";
import { getApiData } from "./utils/httpClient";
function App() {
  const [apiData, setApiData] = useState({});

  useEffect(() => {
    getApiData("profile")
      .then((res) => {
        setApiData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      <body>
        <div>
          <AnimatedBackground />
          <ResponsiveAppBar />
          <div class="lg:ml-36 lg:mr-36 md:ml-20 md:mr-20 sm:ml-6 sm:mr-6">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/tables" element={<Tables apiData={apiData} />} />
              <Route path="/charts" element={<Charts />} />
            </Routes>
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
