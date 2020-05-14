// @ts-nocheck
import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme: any) => ({
  root: {
    maxWidth: "3%",
  },
}))

function dataDisplay(data: any){
  let dataType
  let teams = data

  return(
    teams.map((teams: any) => (
      <div style={{
        clear: "both"
      }}>
        <Divider/>
        <p style={{
            float: "left",
            paddingRight: "15px"
          }}
        >
          {teams.Location} {teams.Team}
        </p>
        <p style={{
            float: "right"
          }}
        >
          {teams.x}%
        </p>
      </div>

  )))
}

export default function FreeThrows(props: any){
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
        title = {`Best Free Throw Shooting Teams`}
        />
        <CardContent>
          {display}
        </CardContent>
      </Card>
    </Box>
  )
}
