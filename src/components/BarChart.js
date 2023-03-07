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
    if (res) {
      setData({
        labels: res.labels,
        datasets: [
          {
            label: "Sales",
            data: res.data,
            backgroundColor: [
              "rgba(255, 99, 132, 0.8)",
              "rgba(255, 159, 64, 0.8)",
              "rgba(255, 205, 86, 0.8)",
              "rgba(75, 192, 192, 0.8)",
              "rgba(54, 162, 235, 0.8)",
              "rgba(153, 102, 255, 0.8)",
              "rgba(201, 203, 207, 0.8)",
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
      <div class="flex justify-center lg:h-96 lg:w-96 md:h-60 md:w-60 sm:h-32 sm:w-32">
        <Bar
          data={data}
          height={"100%"}
          width={"100%"}
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
