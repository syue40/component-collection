import React, { useEffect, useState } from "react";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
// import { Table } from "@mui/material";
import TemplateTable from "../components/TemplateTable";
export const Tables = (props) => {
  return (
    <div>
      <div className="ml-8 mr-8 pl-5 pr-5 mt-3">
        {props.data.length > 0 ? <TemplateTable data={props.data} /> : ""}
      </div>
    </div>
  );
};
