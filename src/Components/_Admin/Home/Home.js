import React from 'react'
import useStyles from './styles';
import { Grid, Paper, Typography } from '@material-ui/core';
import { panels, progress, linearProgress } from '../../../helpers/HomeData';
import Card from '../Card';
import Progress from '../Progress';
import Line from '../Charts/Line';
import Bar from '../Charts/Bar';
import Pie from '../Charts/Pie';
import LinearProgress from '../Progress/Linear';
import { lineData, lineOptions, barData, barOptions, pieData, pieOptions } from "../../../variables/charts";

function Home() {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container className={classes.container} spacing={3}>
        {
          panels.map((p, i) =>
            <Grid key={i} item xs={12} sm={6} md={3}>
              <Card {...p} />
            </Grid>
          )
        }

        <Grid item xs={12} md={6} >
          <Paper elevation={3} className={classes.chartRoot}>
            <p className = {classes.status}>Email subscribtions</p>
            <Bar data={barData} options={barOptions} className={classes.lineCahrt} />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}  >
          <Paper elevation={3} className={classes.chartRoot}>
          <p className = {classes.status}>Weekly sales</p>  
            <span className={classes.doughtnutTxt}>+27%</span>
            <Pie data={pieData} options={pieOptions} className={classes.lineCahrt} />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} className={classes.chartRoot} >
          
          <p className = {classes.status}>Total revenue</p>  
            <div className={classes.lineCahrt}>
              <Line data={lineData} options={lineOptions} />
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} className={classes.chartRoot} >
              <p className = {classes.status}>Profile Status</p>
              {
                linearProgress.map((p, i) => 
                <div className = {classes.lpItem} key = {i}>
                  <p className = {classes.steps}>
                    <span>{p.subtitle}</span>
                    <span>{p.step}</span>
                  </p>
                  <LinearProgress value = {p.progress} />
                </div>
                )
              }
          </Paper>
        </Grid>
        {
          progress.map((p, i) =>
            <Grid item key={i+1} item xs={12} sm={6} md={3}>
              <Paper elevation={3} className={classes.paper}>
                <Typography variant="subtitle1" className={classes.subtitle}>
                  {p.subtitle}
                </Typography>
                <Progress val={p.progress} />
              </Paper>
            </Grid>
          )
        }


      </Grid>
    </div>
  )
}

export default Home
