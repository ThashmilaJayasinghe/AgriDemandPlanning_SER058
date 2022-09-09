import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

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
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: false
        },

        title: {
            display: true,
            text: 'Completed Supply of Crops',
        },
    },
};

const labels = ['Rice', 'Grains', 'Legumes', 'Vegetables(L)', 'Vegetables(H)'];

export const data = {
    labels,
    datasets: [
        {
            // label: 'Rice',
            data: [45,64,32,78,91],
            // data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
            backgroundColor: ["#a3e635", "#66bb6a","#b2ff59","#d9f99d","#65a30d"],
            barThickness: 60,
        },
    ],
};

const Barchart = () => {
    return (
        <Bar  data={data} width={100} height={320} options={options}  />
    )
}

export default Barchart

