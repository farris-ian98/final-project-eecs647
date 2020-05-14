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

function dataDisplay(data: any){
  let dataType
  let Players = data

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
          {Players.TM} - {Players.PLAYER}
        </p>
        <p style={{
            float: "right"
          }}
        >
          {Players.PTS}-PTS {Players.TRB}-TRB {Players.AST}-AST {Players.STL}-STL
        </p>
      </div>

  )))
}

export default function SixthMan(props: any){
  const classes = useStyles();
  let display = dataDisplay(props.data)

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
        title = {`6th Man of the Year Front Runners`}
        />
        <CardContent>
          {display}
        </CardContent>
      </Card>
    </Box>
  )
}
