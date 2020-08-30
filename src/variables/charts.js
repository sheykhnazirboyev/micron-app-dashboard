export const lineData = {
  labels: ["0s", "10s", "20s", "30s", "40s", "50s", "60s"],
  datasets: [{
    label: "Car Speed",
    data: [10, 20, 10, 20, 25, 20, 30],
    lineTension: 0,
    fill: false,
    borderColor: 'magenta',
    backgroundColor: 'rgba(255, 0, 255, 0.2)',
    borderDash: [0, 0],
    pointBorderColor: 'magenta',
    pointBackgroundColor: 'magenta',
    pointRadius: 5,
    pointHoverRadius: 5,
    pointHitRadius: 30,
    pointBorderWidth: 3,
    pointStyle: 'rectRounded'
  }]
}

export const lineOptions =
{
  legend: {
    display: false
  },
  title: {
    display: false,
    text: "Total revenue",
    fontSize: 15
  },
  scales: {
    yAxes: [
      {
        categorySpacing: 0,
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
}

export const barData = {
  labels: ["M", "T", "W", "T", "F", "S", "F", "N", "M", "L", "K", "P", "R"],
  datasets: [
    {
      label: "Population",
      data: [
        100,
        200,
        300,
        100,
        400,
        500,
        200,
        700,
        800,
        500,
        750,
        300,
        800,

      ],
      backgroundColor: [
        'rgba(0, 99, 132, 0.6)',
        'rgba(30, 99, 132, 0.6)',
        'rgba(60, 99, 132, 0.6)',
        'rgba(90, 99, 132, 0.6)',
        'rgba(120, 99, 132, 0.6)',
        'rgba(150, 99, 132, 0.6)',
        'rgba(180, 99, 132, 0.6)',
        'rgba(210, 99, 132, 0.6)',
        'rgba(60, 99, 132, 0.6)',
        'rgba(90, 99, 132, 0.6)',
        'rgba(210, 99, 132, 0.4)',
        'rgba(210, 99, 132, 0.5)',
        'rgba(210, 99, 132, 0.4)'
      ],
      borderColor: [
        'rgba(0, 99, 132, 1)',
        'rgba(30, 99, 132, 1)',
        'rgba(60, 99, 132, 1)',
        'rgba(90, 99, 132, 1)',
        'rgba(120, 99, 132, 1)',
        'rgba(150, 99, 132, 1)',
        'rgba(180, 99, 132, 1)',
        'rgba(210, 99, 132, 1)',
        'rgba(60, 99, 132, 1)',
        'rgba(90, 99, 132, 1)',
        'rgba(210, 99, 132, 1)',
        'rgba(210, 99, 132, 1)',
        'rgba(210, 99, 132, 1)'
      ],
      borderWidth: 2,
      hoverBorderWidth: 0
    }
  ]
}

export const barOptions =
{
  legend: {
    display: false
  },
  title: {
    display: false,
    text: "Largest Cities in Masachussets",
    fontSize: 20
  },
  scales: {
    yAxes: [
      {
        barPercentage: 0.5,
        ticks: {
          autoSkip: true,
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
}

// export const pieData = {
//   labels: ["M", "T", "W", "T", "F", "S"],
//   datasets: [
//     {
//       label: "Population",
//       data: [
//         100,
//         200,
//         300,
//         400,
//         500,
//         600
//       ],
//       backgroundColor: ["yellow", "green", "blue", "pink", "magenta", "gray"],
//     }
//   ]
// }

// export const pieOptions =
// {
//   title: {
//     display: false,
//     text: "Largest Cities in Masachussets",
//     fontSize: 25
//   },
//   scales: {
//     yAxes: [
//       {
//         ticks: {
//           autoSkip: true,
//           maxTicksLimit: 10,
//           beginAtZero: true
//         },
//         gridLines: {
//           display: false
//         }
//       },
//     ],
//     xAxes: [
//       {
//         gridLines: {
//           display: false
//         }
//       }
//     ]
//   }
// }

export const pieData = {
  labels: ["11/19", "12/19", "01/20", "02/20", "03/20"],
  datasets: [
    {
      label: "TeamB Score",
      data: [30, 35, 40, 60, 50],
      backgroundColor: [
        'rgba(0,183,194, 0.3)',
        'rgba(238,111,87, 0.4)',
        'rgba(180, 99, 132, 0.4)',
        'rgba(37,31,68, 0.4)',
        'rgba(250,38,160, 0.4)',

      ],
      borderColor: [
        'rgba(0,188,212, 1)',
        'rgba(238,111,87, 1)',
        'rgba(180, 99, 132, 1)',
        'rgba(37,31,68, 1)',
        'rgba(250,38,160, 1)',
      ],
      borderWidth: [1, 1, 1, 1, 1]
    }
  ],
  
};

//options
export const pieOptions = {
  cutoutPercentage: 70,
  responsive: true,
  title: {
    display: false,
    position: "top",
    text: "Doughnut Chart",
    fontSize: 15,
    fontColor: "#111"
  },
  legend: {
    align: "center",
    display: true,
    position: "bottom",
    labels: {
      fontColor: "#333",
      fontSize: 12
    }
  },
};