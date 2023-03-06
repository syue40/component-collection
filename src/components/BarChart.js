import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  BarController,
  BarElement,
  LinearScale,
  CategoryScale,
} from "chart.js";

const BarChart = (props) => {
  //init placeholder values for label, data, and background color
  ChartJS.register(
    ArcElement,
    Tooltip,
    Legend,
    BarController,
    BarElement,
    LinearScale,
    CategoryScale
  );
  const [data, setData] = useState({
    labels: ["No data to show"],
    datasets: [
      {
        label: "Count",
        data: [],
        backgroundColor: props.backgroundColor,
      },
    ],
  });

  useEffect(() => {
    let res = props.data;
    console.log(props);
    if (res) {
      console.log(res);

      // //push site name and cost/consumption from queried data to empty arrs
      // res.forEach((obj) => {
      //   data.push(parseFloat(obj[props.columns[1]]));
      //   labels.push(String(obj[props.columns[0]]));
      // });

      //set data as queried data, set labels and chart color
      // sortByValue(props.labels, props.data, temp_list);
      setData({
        labels: res.labels,
        datasets: [
          {
            label: "Sales",
            data: res.data,
            backgroundColor: [
              'rgba(255, 99, 132, 0.8)',
              'rgba(255, 159, 64, 0.8)',
              'rgba(255, 205, 86, 0.8)',
              'rgba(75, 192, 192, 0.8)',
              'rgba(54, 162, 235, 0.8)',
              'rgba(153, 102, 255, 0.8)',
              'rgba(201, 203, 207, 0.8)'
            ],
          },
        ],
      });
    }
  }, [props]);

  return (
    <div>
      <div class="p-3">
        <h2 className="font-bold">{props.title}</h2>
      </div>
      <div class="flex justify-center lg:h-96 lg:w-96 md:h-60 md:w-30 sm:h-42 sm:w-12">
        <Bar
          data={data}
          options={{
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: false,
                position: "right",
              },
              datalabels: {
                display: false,
              },
            },
            scales: {
              y: {
                display: true,
                title: {
                  display: true,
                  text: props.yaxis,
                },
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default BarChart;
