import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
// import { Table } from "@mui/material";
import TemplateTable from "../components/TemplateTable";

export const Home = (props) => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  console.log(props);
  return (
    <div>
      <div className="ml-8 mr-8 pl-5 pr-5 mt-3">
        {props.data.length > 0 ? (
          <TemplateTable
            data={props.data}
            headers={[
              "country_code",
              "region_name",
              "sub_region_name",
              "intermediate_region",
              "country_name",
              "income_group",
              "year",
              "total_gdp",
              "total_gdp_million",
              "gdp_variation",
            ]}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
