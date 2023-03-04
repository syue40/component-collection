import "./styles/App.css";
import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Home } from "./pages/Home";
import { Charts } from "./pages/Charts";
import { Tables } from "./pages/Tables";
import Papa from "papaparse";
// import countries_gdp_hist from "./countries_gdp_hist.csv"
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import { AnimatedBackground } from "./components/Background";
function App() {
  const [data, setData] = useState({});
  const [error, setError] = useState("");

  async function getData() {
    const tempData = Papa.parse(await fetchCsv());
    return tempData.data;
  }

  async function fetchCsv() {
    const response = await fetch("./countries_gdp_hist.csv");
    const reader = response.body.getReader();
    const result = await reader.read();
    const decoder = new TextDecoder("utf-8");
    const csv = await decoder.decode(result.value);
    // console.log('csv', csv);
    return csv;
  }

  useEffect(() => {
    getData()
      .then((res) => {
        setData(res);
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
          <Routes>
            <Route path="/" element={<Home  />} />
            <Route path="/tables" element={<Tables data={data}/>} />
            <Route path="/charts" element={<Charts />} />
          </Routes>
        </div>
      </body>
    </div>
  );
}

export default App;
