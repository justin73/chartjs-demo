import React, {useRef, useEffect} from 'react'
import Chart from "chart.js";
import classes from "./LineGraph.module.css";

//--Chart Style Options--//
Chart.defaults.global.defaultFontFamily = "'PT Sans', sans-serif"
// Chart.defaults.global.elements.line.tension = 0;
//--Chart Style Options--//

const LineGraph = ({data, labels})=>{
    const {easyData, difficultData} = {...data}
    console.log(difficultData)
    const chartRef = useRef(null)
    useEffect(() => {
        const myChartRef = chartRef.current.getContext('2d')
        new Chart(myChartRef, {
            type: "line",
            data: {
                //Bring in data
                labels: labels,
                datasets: [
                    {
                        label: "EASY",
                        data: easyData,
                        fill: false,
                        borderColor: "#98B9AB"
                    },
                    {
                        label: 'DIFFICULT',
                        data: difficultData,
                        fill: false
                    }
                ]
            },
            options: {
                //Customize chart options
            }
        })
    }, []);
    return (
        <div className={classes.graphContainer}>
            <canvas id='myChart' ref={chartRef}></canvas>
        </div>
    )
}

export default LineGraph