import { useGetDirectors } from "@/entities/director";
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "График количества колличества фильмов",
    },
  },
};
export const Chart = () => {
  const { data: directors } = useGetDirectors();
  const chartData = {
    labels: directors?.map((director) => director.name),
    value: directors?.map((director) => director.film_count),
  };
  const data = {
    labels: chartData.labels,
    datasets: [
      {
        label: "Фильмы",
        data: chartData?.labels?.map(
          (item, index) =>
            chartData?.value[index] * Math.floor(Math.random() * index + 1)
        ),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <div className="flex justify-center items-center ">
      <div className="w-[700px] h-[700px]">
        <Bar options={options} data={data} />
      </div>
    </div>
  );
};
