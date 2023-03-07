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
      console.log(props.apiData)
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
      });
    }
  }, [props.apiData]);

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
        <div class="grid sm:grid-rows-3 md:grid-rows-3 lg:grid-rows-2 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
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
            <div class="grid grid-cols-3 col-span-3 gap-2">
              <div class="flex justify-center items-center col-span-1 rounded-lg bg-white shadow-lg border m-3">
                <BigNumberCounter
                  data={data.lifetime_sales}
                  dollar_amount={true}
                  title={"Total Lifetime Sales"}
                />
              </div>
              <div class="flex justify-center items-center col-span-1 rounded-lg bg-white shadow-lg border m-3">
                <BigNumberCounter data={data.total_clients} title={"Total Clients"} />
              </div>
              <div class="flex justify-center items-center col-span-1 rounded-lg bg-white shadow-lg border m-3">
                <BigNumberCounter data={data.operational_countries} title={"Operational Countries"} />
              </div>
            </div>
          </div>
          <div class="flex sm:col-span-3 md:col-span-1 lg:col-span-1 row-span-1 gap-x-8 ">
            <div class="grid grid-cols-3 gap-2">
              <div class="flex justify-center items-center col-span-1 rounded-lg bg-white shadow-lg border m-3">
                <BigNumberCounter data={data.total_genres} title={"Total Genres"} />
              </div>
              <div class="flex justify-center items-center col-span-1 rounded-lg bg-white shadow-lg border m-3">
                <BigNumberCounter data={data.different_languages} title={"Different Languages"} />
              </div>
              <div class="flex justify-center items-center col-span-1 rounded-lg bg-white shadow-lg border m-3">
                <BigNumberCounter data={data.movies} title={"Movies"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
