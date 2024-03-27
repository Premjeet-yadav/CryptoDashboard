import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';
import './PopulationChart.css'
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
        <div className='outer'>
            <h1>Hello Broklyn Simmons!</h1>
            <h1>Welcome to <span style={{color:'orange'}} >Spot Trading</span></h1>
            <h2>Population Data of USA</h2>
            <div className='chart'>
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
