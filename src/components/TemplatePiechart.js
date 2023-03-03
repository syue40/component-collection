import React, { useState, useEffect } from "react";
import { Pie } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";

const PieChart = (props) => {
  const [pieData, setPieData] = useState({
    labels: ["No data to show"],
    datasets: [
      {
        label: props.chartTitle,
        data: [1],
        backgroundColor: "#B3B3B5",
      },
    ],
  });

  // Call the back-end app for data table (an array of RealDictRow objects), the response.
  useEffect(() => {
    let res = props.dataset;
    // Select two columns from the data table: the Primary Key, and a chosen Attribute
    let labels = []; // Primary Key values
    let data = []; // Data values determined by props.dataAttribute

    if (res[0] !== "No data to show") {
      res.forEach((row) => {
        for (let attribute in row) {
          if (attribute === props.dataAttribute) {
            data.push(parseFloat(row[attribute]));
          } else if (attribute === props.labelAttribute) {
            labels.push(String(row[attribute]));
          }
        }
      });

      // Set the data obtained from Back-end to the Pie Chart and assign random colour to pie slices
      setPieData({
        labels: labels,
        datasets: [
          {
            label: props.chartTitle,
            data: data,
            backgroundColor: generateRandomColor(res.length),
          },
        ],
      });
    }
  }, [props.dataset]);

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
      "#d736ee",
      "#27b27b",
      "#d42530",
      "#71aecd",
      "#49da6a",
      "#1216b9",
      "#7a5f04",
      "#496938",
      "#fad391",
      "#654e1f",
      "#7a50ca",
      "#da727b",
      "#745e40",
      "#713874",
      "#767a00",
      "#8f2bbc",
      "#b91b21",
      "#edc0ac",
    ];
    return colorList.slice(0, index);
  };
  return (
    <div className={props.widgetClassName}>
      <div className="widget h-full w-full flex flex-col">
        <div className="widget-header">
          <h2>{props.chartTitle}</h2>
        </div>

        <div className={props.containerClassName}>
          <Pie
            width={"100%"}
            height={"100%"}
            data={pieData}
            plugins={[ChartDataLabels]}
            options={{
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  display: true,
                  position: "bottom",
                  align: props.legendAlignment,
                  labels: {
                    padding: 10,
                  },
                },
                datalabels: {
                  align: "end",
                  display: "auto",
                  position: "outside",
                  color: "#fff",
                  formatter: (value, ctx) => {
                    let datasets = ctx.chart.data.datasets;
                    let sum = datasets[0].data.reduce((a, b) => a + b, 0);
                    let percentage = Math.round((value / sum) * 100) + "%";
                    return percentage;
                  },
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default PieChart;
