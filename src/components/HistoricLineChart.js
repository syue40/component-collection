import React, { useState, useEffect } from "react";
import { Chart } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "../styles/Histogram.css";

function HistoricLineChart(props) {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  const [chartValues, setChartValues] = useState({
    units_sold: [],
    value: [],
    dates: [],
  });
  useEffect(() => {
    let res = props.data;
    if (res) {
      setChartValues({
        dates: res.dates,
        units_sold: res.units_sold,
        value: res.daily_revenue,
      });
    }
  }, [props]);

  return (
    <div class="">
        <div class="p-3">
        <h2 className="font-bold">{props.title}</h2>
      </div>
      <div class="chart-container">
        <Chart
          data={{
            datasets: [
              {
                type: "line",
                label: "Revenue per Day ($)",
                yAxisID: "dollars",
                borderColor: props.line_color,
                backgroundColor: props.line_color,
                data: chartValues.value,
                fill: true,
                tension: 0.4,
              },
              {
                type: "bar",
                label: "Units Sold per Day",
                yAxisID: "units",
                backgroundColor: props.bar_color,
                data: chartValues.units_sold,
                fill: true,
                tension: 0.4,
              },
            ],
            labels: chartValues.dates,
          }}
          options={{
            scales: {
                dollars: {
                type: "linear",
                position: "right",
                grid: {
                  drawOnChartArea: false, // only want the grid lines for one axis to show up
                },
                title: {
                  display: true,
                  text: "Revenue per Day ($)",
                },
              },
              units: {
                type: "linear",
                position: "left",
                title: {
                  display: true,
                  text: "Total Units Sold",
                },
              },
            },
            plugins: {
              legend: {
                display: true,
                position: "bottom",
                labels: {
                  color: "rgb(0, 0, 0)",
                },
              },
            },
          }}
        />
      </div>
    </div>
  );
}

export default HistoricLineChart;
