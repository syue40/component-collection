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
      <div class="mt-8 ml-8 mr-8 pl-5 pr-5 mt-3">
        {props.data.length > 0 ? <TemplateTable data={props.data} /> : ""}
      </div>
      <div class="ml-8 mr-8 pl-5 pr-5 mt-3">
        <div class="grid grid-cols-3 sm:grid-cols md:grid-cols-2 lg:grid-cols-3 gap-8">
           <div class="flex justify-center col-span-1 rounded-lg bg-white shadow-lg border p-5 mb-10">
            {props.data.length > 0 ? <PieChart data={pieCountriesData}/>: ""}
            </div>
            <div class="flex justify-center col-span-1 rounded-lg bg-white shadow-lg border p-5 mb-10">
                {props.data.length > 0 ? <PieChart data={pieCountriesData}/>: ""}
            </div> 
            <div class="flex justify-center col-span-1 rounded-lg bg-white shadow-lg border p-5 mb-10">
                {props.data.length > 0 ? <PieChart data={pieCountriesData}/>: ""}
            </div> 
        </div>
        
        
      </div>
    </div>
  );
};
