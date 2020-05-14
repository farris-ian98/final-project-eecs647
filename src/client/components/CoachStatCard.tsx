import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

function DataDisplay(coach, coachName){
  console.log(coach);
  let index = 332;
  if (coachName != null){
    index = coach.findIndex(x => x.Coach === coachName)
    if(index < 0 || index > 334){
      index = 332;
    }
  }
  return(
    Object.entries(coach[index]).map(([key, val]) =>
      <div style={{
        clear: "both"
      }}>
        <Divider/>
        <p key={key} style={{float: "left", paddingRight: "15px"}}>
          {key}:
        </p>
        <p style={{float: "right"}}>
          {val}
        </p>
      </div>
    ))
}
export default function CoachStatCard(props){
  let display = DataDisplay(props.data, props.cName)
  console.log(props.cName);
  return(
    <Box display = "right" style={{
      paddingTop: "2%",
      paddingLeft: "2%",
      paddingRight: "2%",
      border: "2%",
      width: "50%"
    }}>

      <Card width= "30px">
        <CardHeader
        title = "Coach Lookup"
        />
        <CardContent>
          {display}
        </CardContent>
      </Card>
    </Box>
  )
}
