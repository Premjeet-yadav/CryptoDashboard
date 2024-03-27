// import React, { useEffect, useState } from 'react';
// import { Line } from 'react-chartjs-2';
// import axios from 'axios';
// import {
//     Chart as ChartJS,
//     CategoryScale,
//     LinearScale,
//     BarElement,
//     LineElement,
//     PointElement,
//     Tooltip,
//     Legend,
//   } from "chart.js";
  
//   ChartJS.register(
//     CategoryScale,
//     LinearScale,
//     BarElement,
//     LineElement,
//     PointElement,
//     Tooltip,
//     Legend
//   );

// const PopulationChart = () => {
//     const [chartData, setChartData] = useState([]);

//     const chart = () => {
//         axios
//       .get('https://datausa.io/api/data?drilldowns=Nation&measures=Population')
//       .then(res => {
//         console.log(res.data.data)
//         setChartData(res.data.data);
//       })
//       .catch(err => {
//         console.log(err);
//       });
//     }
//   const graph = {
//     labels: chartData.map((data) => data.Year),
//     datasets: [
//       {       
//         label: "United States Population",
//         data: chartData.map((el) => el.Population),
//         borderColor: "limegreen",
//         tension: 0.5,
//         backgroundColor: ["limegreen"],
//       },
//     ],
//   }
//   useEffect(() => {
//     chart();
//   }, []);

//   return (
//     <div className="App">
//       <h1>Population Data</h1>
//       <div>
//         <Line
//           data={graph}
//           options={{
//             responsive: true,
//             scales: {
//               y: [
//                 {
//                   ticks: {
//                     autoSkip: true,
//                     maxTicksLimit: 10,
//                     beginAtZero: true
//                   },
//                   gridLines: {
//                     display: true
//                   }
//                 }
//               ],
//               x: [
//                 {
//                   gridLines: {
//                     display: true,
//                   }
//                 },
//                 {title: {
//                     display: true,
//                     text: "Year",
//                     color: "white", 
//                   },
//                 }
//               ]
//             }
//           }}
//         />
//       </div>
//     </div>
//   );
// };

// export default PopulationChart;

import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    PointElement,
    Tooltip,
    Legend,
} from "chart.js";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    PointElement,
    Tooltip,
    Legend
);

const PopulationChart = () => {
    const [chartData, setChartData] = useState([]);

    const chart = () => {
        axios
            .get('https://datausa.io/api/data?drilldowns=Nation&measures=Population')
            .then(res => {
                res.data.data.reverse();
                setChartData(res.data.data);
            })
            .catch(err => {
                console.log(err);
            });
    }
    const graph = {
        labels: chartData.map((data) => data.Year),
        datasets: [
            {
                label: "United States Population",
                data: chartData.map((el) => el.Population),
                borderColor: "Orange",
                tension: 0.5,
                backgroundColor: ["Orange"],
            },
        ],
    }
    useEffect(() => {
        chart();
    }, []);

    return (
        <div style={{ backgroundColor: '#333',display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontSize: 'calc(10px + 2vmin)', color: 'white' }}>
            <h1>Population Data</h1>
            <div style={{ width: '80%', height: '80%' }}>
                <Line
                    data={graph}
                    options={{
                        responsive: true,
                        scales: {
                            y: [
                                {
                                    ticks: {
                                        autoSkip: true,
                                        maxTicksLimit: 10,
                                        beginAtZero: true
                                    },
                                    gridLines: {
                                        display: true
                                    }
                                }
                            ],
                            x: [
                                {
                                    gridLines: {
                                        display: true,
                                    }
                                },
                                {
                                    title: {
                                        display: true,
                                        text: "Year",
                                        color: "white",
                                    },
                                }
                            ]
                        }
                    }}
                />
            </div>
        </div>
    );
};

export default PopulationChart;
