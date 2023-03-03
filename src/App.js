import './App.css';
import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Home } from "./pages/Home"
import { Charts } from "./pages/Charts"
import { Tables } from "./pages/Tables"
import  ResponsiveAppBar from "./components/ResponsiveAppBar"
function App() {

  const [data, setData] = useState({})

  return (
    <div className="App">
      <body>
        <div>
        <ResponsiveAppBar
        />
          <Routes>
            <Route
              path="/"
              element={<Home/>}/>
            <Route
            path="/tables"
            element={<Tables/>}
            />
            <Route
            path="/charts"
            element={<Charts/>}
            />
          </Routes>
        </div>
      </body>
    </div>
  );
}

export default App;
