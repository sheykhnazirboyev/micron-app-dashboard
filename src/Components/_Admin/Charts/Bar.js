import React from 'react'
import { Bar } from 'react-chartjs-2';

function BarCahrt({style, data, options}) {
    return (
        <Bar
            style={style}
            responsive
            data={data}
            options={options}
        />
    )
}

export default BarCahrt;
