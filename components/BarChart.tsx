import type { ChartData } from "chart.js";
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  const [data, setData] = useState<
    ChartData<"bar", number[], string>
  >({
    datasets: [],
  });

  const [options, setOptions] = useState({});

  useEffect(() => {
    const isDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    const textColor = isDarkMode
      ? "rgb(209, 213, 219, 0.9)"
      : "black";

    setData({
      labels: ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"],
      datasets: [
        {
          label: "Sales $",
          data: [18127, 22201, 19490, 17938, 24182, 17842, 22475],
          borderColor: "rgb(53, 162, 235)",
          backgroundColor: "rgb(53, 162, 235, 0.4)",
        },
      ],
    });
    setOptions({
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Daily Revenue",
          color: textColor,
        },
      },
      maintainAspectRatio: false,
      responsive: true,
      color: textColor,
      scales: {
        y: {
          ticks: {
            color: textColor,
            font: {
              size: 14,
            },
          },
        },
        x: {
          ticks: {
            color: textColor,
            font: {
              size: 14,
            },
          },
        },
      },
    });
  }, []);

  return (
    <>
      <div className="relative m-auto h-[50vh] w-full rounded-lg border bg-white p-4 dark:border-slate-600 dark:bg-slate-700 md:col-span-2 lg:h-[70vh]">
        <Bar data={data} options={options} />
      </div>
    </>
  );
};

export default BarChart;
