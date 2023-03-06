import React, { useState, useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";

const PieChart = (props) => {
  ChartJS.register(ArcElement, Tooltip, Legend);
  const generateRandomColor = (index) => {
    const colorList = [
      "#204e8d",
      "#ad4501",
      "#f760ad",
      "#24f580",
      "#bcbc57",
      "#66a61b",
      "#c90dd6",
      "#02986c",
      "#0456d9",
      "#91b049",
      "#a2bf5b",
      "#bb68de",
      "#b4f090",
      "#869805",
      "#5daa3a",
      "#4a0845",
      "#7f5b03",
      "#883015",
      "#6190e2",
      "#2f2590",
      "#bc63fa",
      "#42f2d7",
      "#05d9dc",
      "#99595d",
      "#64dc8b",
      "#e16020",
      "#3a321a",
      "#620df8",
      "#c986d5",
      "#5ca8e8",
      "#02e056",
      "#035f10",
    ];
    return colorList.slice(0, index);
  };
  const [pieData, setPieData] = useState({
    labels: ["No data to show"],
    datasets: [
      {
        label: "Count",
        data: [],
        backgroundColor: generateRandomColor(10),
      }
    ],
    
  });

  // Call the back-end app for data table (an array of RealDictRow objects), the response.
  useEffect(() => {
    let res = props.data;
    if (res) {
      // Set the data obtained from Back-end to the Pie Chart and assign random colour to pie slices
      setPieData({
        labels: res.labels,
        datasets: [
          {
            label: "Count",
            data: res.data,
            backgroundColor: generateRandomColor(10),
          },
        ],
      });
    }
  }, [props]);

  
  return (
    <div className="lg:h-96 md:h-60 sm:h-42 lg:w-96 md:w-30 sm:w-18">
      <div className="h-full w-full flex">
          <Doughnut
            data={pieData}
            // plugins={[ChartDataLabels]}
            options={{
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  display: true,
                  position: "bottom",
                  align: "center",
                  labels: {
                    fontSize: "2px",
                    boxWidth: 12,
                    boxHeight: 12,
                    padding: 8,
                  },
                },
                // datalabels: {
                //   align: "end",
                //   display: "auto",
                //   color: "#fff",
                //   formatter: (value, ctx) => {
                //     let datasets = ctx.chart.data.datasets;
                //     let sum = datasets[0].data.reduce((a, b) => a + b, 0);
                //     let percentage = Math.round((value / sum) * 100) + "%";
                //     return percentage;
                //   },
                // },
              },
            }}
          />
        </div>
    </div>
  );
};

export default PieChart;
