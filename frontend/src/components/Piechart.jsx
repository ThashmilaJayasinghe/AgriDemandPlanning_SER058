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
            text: 'Supply - Demand Relationship',
        },
    },
};
export const data = {

    labels: ['Demand', 'Supply'],
    datasets: [
        {
            label: '# of Votes',
            data: [60, 40],
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(99, 255, 132, 0.5)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(99, 255, 132, 1)',
            ],
            hoverBackgroundColor: [
                'rgba(255, 99, 132)',
                'rgba(54, 262, 35)',

            ],
            //   radius: 100,
            borderWidth: 1,
        },
    ],
};

const Piechart = () => {
    return (
        <Doughnut data={data} height={240}   options={options}

        />
    )
}

export default Piechart




