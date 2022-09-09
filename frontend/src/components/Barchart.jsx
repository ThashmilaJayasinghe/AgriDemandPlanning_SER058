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
            position: 'top',
        },

        title: {
            display: true,
            text: 'Chart.js Bar Chart',
        },
    },
};

const labels = ['Samba', 'Naadu', 'GreenGram', 'Basmati', 'Kawpi'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Rice',
            data: [45,64,32,78,91],
            // data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
            backgroundColor: ["#fefce8", "#fed7aa","#22c55e","#fde68a","#ca8a04"],
            barThickness: 60,
        },
    ],
};

const Barchart = () => {
    return (
        <Bar  data={data} width={100} height={520} options={options}  />
    )
}

export default Barchart

