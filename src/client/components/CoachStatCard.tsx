import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

function DataDisplay(coach){
  console.log(coach)
  return(

    Object.entries(coach[0]).slice(1).map(([key, val]) =>
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
  let display = DataDisplay(props.data)
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
        title = {props.data[0].Coach}
        />
        <CardContent>
          {display}
        </CardContent>
      </Card>
    </Box>
  )
}
