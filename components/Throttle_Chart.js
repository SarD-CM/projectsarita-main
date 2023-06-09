
import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';


const Throttle_Chart = ({ data_fetching }) => {
    const dateLocal = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];
    // this usestate is used to add the data to the array
    const [array, setArray] = useState([1, 2, 3, 4, 5, 6, 6]);
    //this usestate is used to delate elements from the array with a incremental count. 
    const [arraydelate, setArraydelate] = useState();
    //This usestate is used to increment a variable in order to deleate the elements of the array. its increment by 1 per 1. 
    const [count, setCount] = useState(0);
    // [1,2,3,4,5] -> count = 1 & newdata = 6 -> [2,3,4,5,6] -> count = 2 & newdata = 6 -> [3,4,5,6,6] count = 3 & newdata = 6 -> [4,5,6,6,6] count = 4 & newdata = 6 -> [5,6,6,6,6] 

    // if userData changes then the chart will re-render

    const [chartData, setChartData] = useState({
        datasets: [],
    });

    const [chartOptions, setChartOptions] = useState({
        plugins: {
            legend: {
                display: false
            },
            title: {
                display: false,
                text: 'Daily Revenue'
            }
        },
        maintainAspectRatio: false,
        responsive: true,
        scales: {
            y: {
                display: true,
                ticks: {
                    color: "#134255",
                    font: {
                        size: 12
                    }
                },
                grid: {
                    color: "#134255"
                }
            },
            x: {
                display: false,
            }
        }

    });

    useEffect(() => {
        setChartData({
            labels: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
            datasets: [
                {
                    label: 'Sales $',
                    data: array,
                    borderColor: 'rgb(71, 59, 240)',
                    backgroundColor: 'rgb(232, 237, 223, 0.8)',
                    fill: true,
                    pointRadius: 2,
                    pointHitRadius: 4,
                    pointBackgroundColor: 'mediumblue',
                    borderWidth: 2,
                    tension: 0.5,
                },
            ]
        });
        setArray([...array, data_fetching?.Throttle]);
        setArraydelate(array.splice(0, count));
        // console.log(array)
        setCount(count + 1);
    }, [data_fetching])

    return (
        <>
            <div className="w-full h-full">
                <Line data={chartData} options={chartOptions} />
            </div>
        </>
    );
};

export default Throttle_Chart;

