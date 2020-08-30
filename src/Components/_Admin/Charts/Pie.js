import React from 'react'
import {Doughnut} from 'react-chartjs-2';

function PieChart({style, data, options}) {
    return (
        <Doughnut
            style={style}
            responsive
            data={data}
            options={options}
        />
    )
}

export default PieChart
