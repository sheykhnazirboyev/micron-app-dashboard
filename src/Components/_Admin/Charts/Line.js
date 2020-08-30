import React from 'react'
import { Line } from 'react-chartjs-2';

function LineCahrt({style, data, options}) {
    return (
        <Line
            style={style}
            responsive
            data={data}
            options={options}
        />
    )
}

export default LineCahrt
