import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

function DataDisplay(team){
  return(

    Object.entries(team[0]).slice(1, 10).map(([key, val]) =>
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
export default function TeamStatCard(props){
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
        title = {props.data[0].LOCATION}
        />
        <CardContent>
          {display}
          <div style={{
            clear: "both"
          }}>
            <Divider/>
            <p style={{float: "left", paddingRight: "15px"}}>
              Highest Scorer:
            </p>
            <p style={{float: "right"}}>
              {props.data[0].PLAYER}
            </p>
          </div>
        </CardContent>
      </Card>
    </Box>
  )
}
