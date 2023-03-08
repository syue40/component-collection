import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import TemplateTable from "../components/TemplateTable";
import PieChart from "../components/TemplatePiechart";
import BarChart from "../components/BarChart";
import HistoricLineChart from "../components/HistoricLineChart";
import BigNumberCounter from "../components/BigNumberCounter";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import InputBase from "@mui/material/InputBase";
export const Tables = (props) => {
  const [data, setData] = useState({
    active_customers: {
      data: [],
      labels: [],
    },
    genre_ratios: {
      data: [],
      labels: [],
    },
  });
  const [tableData, setTableData] = useState([]);
  const [value, setValue] = React.useState("");
  const [title, setTitle] = React.useState("");

  useEffect(() => {
    if (props.apiData) {
      setData({
        active_customers: props.apiData.active_customers,
        genre_ratios: props.apiData.genre_ratios,
        rentals_by_staff: props.apiData.rentals_by_staff,
        sales_data: props.apiData.sales_data,
        total_clients: props.apiData.total_clients,
        lifetime_sales: props.apiData.lifetime_sales,
        operational_countries: props.apiData.operational_countries,
        total_genres: props.apiData.total_genres,
        different_languages: props.apiData.different_languages,
        movies: props.apiData.movies,
        payment_data: props.apiData.payment_data,
        films_table: props.apiData.films_table,
      });
      setTableData(props.apiData.payment_data);
      setTitle("DVD Rental Data");
    }
  }, [props]);

  const handleChange = (event) => {
    setValue(event.target.value);
    if (event.target.value === "DVD Rental Data") {
      setTitle("DVD Rental Data");
      setTableData(data.payment_data);
    } else if (event.target.value === "Inventory Data") {
      setTitle("Inventory Data");
      setTableData(data.films_table);
    }
  };

  const BootstrapInput = styled(InputBase)(({ theme }) => ({
    "label + &": {
      marginTop: theme.spacing(3),
    },
    "& .MuiInputBase-input": {
      borderRadius: 4,
      position: "relative",
      backgroundColor: theme.palette.background.paper,
      border: "1px solid #ced4da",
      fontSize: 16,
      padding: "10px 26px 10px 12px",
      transition: theme.transitions.create(["border-color", "box-shadow"]),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
      "&:focus": {
        borderRadius: 4,
        borderColor: "#757575",
        boxShadow: "0 0 0 0.2rem rgba(35, 35, 36,.5)",
      },
    },
  }));

  return (
    <div>
      <div class="ml-8 mr-8 pl-5 pr-5 mt-3 mb-8">
        <h1 class="flex justify-start font-bold text-2xl ml-5 mt-5 mb-3">
          Data Visualizers
        </h1>
        <hr style={{ backgroundColor: "#515152", borderColor: "#515152" }}></hr>
      </div>
      <div class="ml-8 mr-8 pl-5 pr-5 mt-3">
        <div class="grid grid-cols place-content-center sm:grid-cols md:grid-cols-2 lg:grid-cols-3 lg:gap-8 md:gap-4 sm:gap-2">
          <div class="flex justify-center col-span-1 rounded-lg bg-white shadow-lg border p-5 mb-10">
            <PieChart
              data={data.active_customers}
              title={"Ratio of Active Customers"}
            />
          </div>
          <div class="flex justify-center col-span-1 rounded-lg bg-white shadow-lg border p-5 mb-10">
            <PieChart
              data={data.genre_ratios}
              title={"Films In Stock by Genre"}
            />
          </div>
          <div class="flex justify-center col-span-1 rounded-lg bg-white shadow-lg border p-5 mb-10">
            <BarChart
              data={data.rentals_by_staff}
              title="Top Sales by Staff"
              label="Rentals Done"
              color="#ad4501"
              yaxis="Count of Units Rented"
            />
          </div>
        </div>
        <div class="grid sm:grid-rows-3 md:grid-rows-3 lg:grid-rows-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div class="flex justify-center sm:row-span-1 md:row-span-2 lg:row-span-2 sm:col-span-3 md:col-span-3 lg:col-span-2 rounded-lg bg-white shadow-lg border p-5">
            <HistoricLineChart
              title="DVD Rental Store Sales Data"
              line_color="rgba(54, 215, 255, 0.8)"
              bar_color="rgba(182, 54, 255, 0.8)"
              y_label="Units Sold"
              legend_label="Value Generated"
              data={data.sales_data}
            />
          </div>
          <div class="flex sm:col-span-3 md:col-span-1 lg:col-span-1 row-span-1 gap-x-8 ">
            <div class="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-3 col-span-3 gap-2">
              <div class="flex justify-center items-center col-span-1 rounded-lg bg-white shadow-lg border m-3">
                <BigNumberCounter
                  data={data.lifetime_sales}
                  dollar_amount={true}
                  title={"Total Lifetime Sales"}
                />
              </div>
              <div class="flex justify-center items-center col-span-1 rounded-lg bg-white shadow-lg border m-3">
                <BigNumberCounter
                  data={data.total_clients}
                  title={"Total Clients"}
                />
              </div>
              <div class="flex justify-center items-center col-span-1 rounded-lg bg-white shadow-lg border m-3">
                <BigNumberCounter
                  data={data.operational_countries}
                  title={"Operational Countries"}
                />
              </div>
            </div>
          </div>
          <div class="flex sm:col-span-3 md:col-span-1 lg:col-span-1 row-span-1 gap-x-8">
            <div class="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-3 col-span-3 gap-2">
              <div class="flex justify-center items-center col-span-1 rounded-lg bg-white shadow-lg border m-3">
                <BigNumberCounter
                  data={data.total_genres}
                  title={"Total Genres"}
                />
              </div>
              <div class="flex justify-center items-center col-span-1 rounded-lg bg-white shadow-lg border m-3">
                <BigNumberCounter
                  data={data.different_languages}
                  title={"Different Languages"}
                />
              </div>
              <div class="flex justify-center items-center col-span-1 rounded-lg bg-white shadow-lg border m-3">
                <BigNumberCounter data={data.movies} title={"Movies"} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr style={{ backgroundColor: "#515152", borderColor: "#515152" }}></hr>
      <div class="mt-8 ml-8 mr-8 pl-5 pr-5 mt-3">
        <div class="flex mb-5 justify-start">
          <Box sx={{ minWidth: 120 }}>
            <FormControl sx={{ m: 1 }} fullWidth variant="standard">
              <div>
                <h2 class="font-bold text-md justify-start flex mb-2">
                  Select Table View
                </h2>
              </div>
              <NativeSelect
                id="demo-customized-select-native"
                value={value}
                onChange={handleChange}
                input={<BootstrapInput />}
              >
                <option value={"DVD Rental Data"}>DVD Rental Data</option>
                <option value={"Inventory Data"}>Inventory Data</option>
              </NativeSelect>
            </FormControl>
          </Box>
        </div>
        <div>
          <TemplateTable data={props.data} apiData={tableData} title={title} />
        </div>
      </div>
    </div>
  );
};
