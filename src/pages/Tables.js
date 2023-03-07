import React, { useEffect, useState } from "react";

import TemplateTable from "../components/TemplateTable";
import PieChart from "../components/TemplatePiechart";
import BarChart from "../components/BarChart";
import HistoricLineChart from "../components/HistoricLineChart";
import BigNumberCounter from "../components/BigNumberCounter";

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
  useEffect(() => {
    if (props.apiData) {
      setData({
        active_customers: props.apiData.active_customers,
        genre_ratios: props.apiData.genre_ratios,
        rentals_by_staff: props.apiData.rentals_by_staff,
        sales_data: props.apiData.sales_data,
      });
    }
  }, [props]);

  return (
    <div>
      <div class="mt-8 ml-8 mr-8 pl-5 pr-5 mt-3">
        <TemplateTable data={props.data} />
      </div>
      <div class="ml-8 mr-8 pl-5 pr-5 mt-3">
        <div class="grid grid-cols place-content-center sm:grid-cols md:grid-cols-2 lg:grid-cols-3 gap-8">
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
        <div class="grid grid-rows-2 grid-cols-3 gap-8 mb-12">
          <div class="flex justify-center row-span-2 col-span-2 rounded-lg bg-white shadow-lg border p-5">
            <HistoricLineChart
              title="DVD Rental Store Sales Data"
              line_color="rgba(54, 215, 255, 0.8)"
              bar_color="rgba(182, 54, 255, 0.8)"
              y_label="Units Sold"
              legend_label="Value Generated"
              data={data.sales_data}
            />
          </div>
          <div class="flex row-span-1 col-span-1 gap-x-8 ">
            <div class="grid grid-cols-3 gap-2">
            <div class="flex justify-center col-span-1 rounded-lg bg-white shadow-lg border m-3">
              <BigNumberCounter data={1042.34} title={"Total Lifetime Sales"}/>
            </div>
            <div class="flex justify-center col-span-1 rounded-lg bg-white shadow-lg border m-3">
              <BigNumberCounter data={1420} title={"Total Clients"}/>
            </div>
            <div class="flex justify-center col-span-1 rounded-lg bg-white shadow-lg border m-3">
              <BigNumberCounter data={94} title={"Operational Countries"}/>
            </div>
            </div>
          </div>
          <div class="flex row-span-1 col-span-1 gap-x-8">
          <div class="grid grid-cols-3 gap-2">
            <div class="flex justify-center col-span-1 rounded-lg bg-white shadow-lg border m-3">
              <BigNumberCounter data={35} title={"Total Genres"}/>
            </div>
            <div class="flex justify-center col-span-1 rounded-lg bg-white shadow-lg border m-3">
              <BigNumberCounter data={23} title={"Different Languages"}/>
            </div>
            <div class="flex justify-center col-span-1 rounded-lg bg-white shadow-lg border m-3">
              <BigNumberCounter data={1620} title={"Movies"}/>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
