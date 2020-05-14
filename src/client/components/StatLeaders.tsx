// @ts-nocheck
import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "3%",
  },
}))

function dataDisplay(stat: any, data: any){
  let dataType
  let Players = data
  if(stat == "points"){
    dataType = "PPG";
  }
  else if(stat == "rebounds"){
    dataType = "TRB";
  }
  else if(stat == "assists"){
    dataType = "AST";
  }
  return(
    Players.map((Players) => (
      <div style={{
        clear: "both"
      }}>
        <Divider/>
        <p style={{
            float: "left",
            paddingRight: "15px"
          }}
        >
          {Players.Player}
        </p>
        <p style={{
            float: "right"
          }}
        >
          {Object.values(Players)[1]} {dataType}
        </p>
      </div>

  )))
}

export default function StatLeaders(props: any){
  const classes = useStyles();
  let display = dataDisplay(props.stat, props.data)

  return(
    <Box display = "flex" style={{
      paddingTop: "2%",
      paddingLeft: "2%",
      paddingRight: "2%",
      border: "2%",
      width: "33%"
     }}>
      <Card classname={classes.root} >
        <CardHeader
        title = {`NBA ${props.stat} Leaders`}
        />
        <CardContent>
          {display}
        </CardContent>
      </Card>
    </Box>
  )
}
