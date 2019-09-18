import React from 'react';
import classes from "./YourDashboard.module.css";
import LineGraph from "../../components/YourDashboard/LineGraph";
import chartIcon from "../../assets/chart-icon.svg";
import { easyData, difficultData, lvLabels } from "../../mockData";

const Dashboard = () => {

    return (
        <div className={classes.container}>
            <header>
                <img src={chartIcon} alt="bar chart icon" />
                <h1>Demo</h1>
            </header>

            <LineGraph
                data={{easyData, difficultData}}
                labels={lvLabels} />

        </div>
    )
}

export default Dashboard