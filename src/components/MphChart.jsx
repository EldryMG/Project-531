import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import { useDispatch, useSelector } from 'react-redux';
import '/Sprints.css';

function MphChart() {


    const dispatch = useDispatch();
    const mphSprints = useSelector(store => store.fetchSprints)

    console.log('what is all sprints in MPH?', mphSprints)

    const mphData = {
        labels: mphSprints.map((sprint) => sprint.id),
        datasets: [{
            label: "Miles per Hour",
            data: mphSprints.map((sprint) => sprint.mph),
            pointBackgroundColor: ["#F72119"],
            borderColor: ["#F72119"],
            color: ["#F72119"],
            hitRadius: 50,
        }]
    };

    useEffect(() => {
     dispatch({type: 'GET_SINGLE_GRAPH', payload: 'mph'})
    }, [])
    return (
        <>
            <div className="sprints-container">
                     <Line data={mphData} /> 
            </div>
        </>
    );
}

export default MphChart;