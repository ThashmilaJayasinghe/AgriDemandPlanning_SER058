import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        title: {
            display: true,
            text: 'Chart.js Pie Chart',
        },
    },
};
export const data = {

    labels: ['Red', 'Blue', 'Green'],
    datasets: [
        {
            label: '# of Votes',
            data: [12, 19, 23],
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(75, 192, 192, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(75, 192, 192, 1)',
            ],
            hoverBackgroundColor: [
                'rgba(255, 99, 132)',
                'rgba(54, 162, 235)',
                'rgba(75, 192, 192)',

            ],
            //   radius: 100,
            borderWidth: 1,
        },
    ],
};

const Piechart = () => {
    return (
        <Doughnut data={data} height={250}   options={options}

        />
    )
}

export default Piechart




