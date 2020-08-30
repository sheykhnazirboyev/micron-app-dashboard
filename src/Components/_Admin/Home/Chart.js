import React, { useState } from 'react'
import { Bar, Line, Pie } from 'react-chartjs-2';



function Home() {
  const [state, setstate] = useState({
    
  })
  return (
    <div className="chart">
      <div style={{ width: "400px", height: "300px" }}>
        <Bar
          style={{ backgroundColor: "red" }}
          responsive
          data={state.chartData}
          options={{
            title: {
              display: false,
              text: "Largest Cities in Masachussets",
              fontSize: 25
            },
            scales: {
              yAxes: [
                {
                  ticks: {
                    autoSkip: true,
                    maxTicksLimit: 10,
                    beginAtZero: true
                  },
                  gridLines: {
                    display: false
                  }
                },
              ],
              xAxes: [
                {
                  gridLines: {
                    display: false
                  }
                }
              ]
            }
          }}
        />
      </div>
      <div style={{ width: "400px", height: "300px" }}>
        <Line
          style={{ backgroundColor: "red" }}
          responsive
          data={state.chartData}
          options={{
            title: {
              display: false,
              text: "Largest Cities in Masachussets",
              fontSize: 25
            },
            scales: {
              yAxes: [
                {
                  ticks: {
                    autoSkip: true,
                    maxTicksLimit: 10,
                    beginAtZero: true
                  },
                  gridLines: {
                    display: false
                  }
                },
              ],
              xAxes: [
                {
                  gridLines: {
                    display: false
                  }
                }
              ]
            }
          }}
        />
      </div>
      <div style={{ width: "400px", height: "300px" }}>
        <Pie
          style={{ backgroundColor: "red" }}
          responsive
          data={state.chartData}
          options={{
            title: {
              display: false,
              text: "Largest Cities in Masachussets",
              fontSize: 25
            },
            scales: {
              yAxes: [
                {
                  ticks: {
                    autoSkip: true,
                    maxTicksLimit: 10,
                    beginAtZero: true
                  },
                  gridLines: {
                    display: false
                  }
                },
              ],
              xAxes: [
                {
                  gridLines: {
                    display: false
                  }
                }
              ]
            }
          }}
        />
      </div>
      

    </div>
  )
}

export default Home
