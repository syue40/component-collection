import React, { useState, useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

const PieChart = (props) => {
  ChartJS.register(ArcElement, Tooltip, Legend);
  const generateRandomColor = (index) => {
    const colorList = [
      "#00876c",
      "#EF3E36",
      "#17BEBB",
      "#2E282A",
      "#EDB88B",
      "#FAD8D6",
      "#BA7BA1",
      "#C28CAE",
      "#D0ABA0",
      "#DEC4A1",
      "#EDCF8E",
      "#8CFF98",
      "#d43d51",
      "#FFFF82",
      "#0077B6",
      "#90E0EF",
      "#EEBA0B",
      "#A63C06",
      "#710000",
      "#F4E409"
    ];

    let result = [];
    let count = result.length
    while (count < index.length){
        let currentColor = colorList[Math.floor(Math.random()*colorList.length)]
        if(!(result.includes(currentColor))){
          result.push(currentColor)
          count += 1
        }
    }
        
    return result;
  };
  const [pieData, setPieData] = useState({
    labels: ["No data to show"],
    datasets: [
      {
        label: "Count",
        data: [10,10],
        backgroundColor: "#8F8F8F",
      },
    ],
  });

  // Call the back-end app for data table (an array of RealDictRow objects), the response.
  useEffect(() => {
    let res = props.data;

    if (res) {
      setPieData({
        labels: res.labels,
        datasets: [
          {
            label: "Count",
            data: res.data,
            backgroundColor: generateRandomColor(res.data),
          },
        ],
      });
    }
  }, [props]);

  return (
    <div>
      <div class="p-3">
        {props.title ? <h2 class="font-bold">{props.title}</h2> : ""}
      </div>
      <div class="lg:h-96 md:h-60 sm:h-42 lg:w-96 md:w-30 sm:w-18">
        <div class="flex h-full w-full">
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
    </div>
  );
};

export default PieChart;
