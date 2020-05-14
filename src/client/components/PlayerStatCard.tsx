// @ts-nocheck
import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';

function DataDisplay(Players: any, playerName: any){
  let index = 569;
  if (playerName != null){
    index = Players.findIndex((x: any) => x.Player === playerName);
    if (index < 0 || index > 568){
      index = 569;
    }
  }

  return(
    Object.entries(Players[index]).map(([key, val]) =>
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
export default function PlayerStatCard(props: any){
  let display = DataDisplay(props.data, props.pName)
  return(
    <Box display = "center" style={{
      paddingTop: "2%",
      paddingLeft: "2%",
      paddingRight: "2%",
      border: "2%",
      width: "50%"
    }}>

      <Card width= "30px">
        <CardHeader
        title = "Player Lookup"
        />
        <CardContent>
          {display}
        </CardContent>
      </Card>
    </Box>
  )
}
