import React, { useEffect, useState } from "react";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
// import { Table } from "@mui/material";
import TemplateTable from "../components/TemplateTable";
import PieChart from "../components/TemplatePiechart";
import {parseCountriesPieData} from "../utils/dataProcessor"
export const Tables = (props) => {

    const [pieCountriesData, setPieCountriesData] = useState({
        data: [],
        labels: []
    })

    useEffect(() => {
        if (props.data && props.data.length) {
            const parsedPieData = parseCountriesPieData(props.data)
            setPieCountriesData({
                data: parsedPieData.data,
                labels: parsedPieData.labels
            })
        }
      }, [props]);

  return (
    <div>
      <div className="ml-8 mr-8 pl-5 pr-5 mt-3">
        {props.data.length > 0 ? <TemplateTable data={props.data} /> : ""}
      </div>
      <div className="ml-8 mr-8 pl-5 pr-5 mt-3">
        <div className="rounded-lg bg-white shadow-lg border pl-10 pr-10 pt-10 pb-5">
            {props.data.length > 0 ? <PieChart data={pieCountriesData}/>: ""}
        </div>
        
      </div>
    </div>
  );
};
