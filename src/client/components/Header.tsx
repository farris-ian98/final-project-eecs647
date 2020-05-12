import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import StatLeaders from './StatLeaders.tsx';
import PlayerStatCard from './PlayerStatCard.tsx';
import CoachStatCard from './CoachStatCard.tsx';
import logo from '../images/logo-image.png'
import Toolbar from '@material-ui/core/Toolbar';
import TeamStatCard from './TeamStatCard';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`wrapped-tabpanel-${index}`}
      aria-labelledby={`wrapped-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `wrapped-tab-${index}`,
    'aria-controls': `wrapped-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  tabs: {
    justifyContent: "right"
  },
}));

export default function TabsWrappedLabel(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
        {/*<img src={logo} alt="Logo" width = "65px" height= "50px"/>*/}
          <Typography variant="h6" className={classes.title}>
            NBA Stat Tracker
          </Typography>
          <Tabs value={value} onChange={handleChange} aria-label="wrapped label tabs example" className={classes.tabs}>
            <Tab
              value="one"
              label="Season Stat Leaders"
              wrapped
              {...a11yProps('one')}
            />
            <Tab value="two" label="Player Lookup" {...a11yProps('two')} />
            <Tab value="three" label="Coach Lookup" {...a11yProps('three')} />
            <Tab value="four" label="Team Lookup" {...a11yProps('four')} />
          </Tabs>
        </Toolbar>
      </AppBar>

      <TabPanel value={value} index="one">
        <p style={{
          textAlign: "center"
        }}>
          <font size = "+3">
            2019-2020 Season Stat Leaders
          </font>
        </p>
        <Box display = "flex">
          <StatLeaders stat = {"points"} data = {props.pointLeaders}/>
          <StatLeaders stat = {"rebounds"} data = {props.reboundLeaders}/>
          <StatLeaders stat = {"assists"} data = {props.assistLeaders}/>
        </Box>
      </TabPanel>
      <TabPanel value={value} index="two">
        <p> input player name</p>
        <input type="text" id="lname" name="lname" label="player name"/>
        <button type="button">Submit</button>
        <Box display = "center">
          <PlayerStatCard data = {props.playerLookup}/>
        </Box>
      </TabPanel>
      <TabPanel value={value} index="three">
        <Box display = "center">
          <p> input coach name</p>
          <input type="text" id="lname" name="lname" label="coach name"/>
          <button type="button">Submit</button>
          <CoachStatCard data = {props.coachLookup}/>
        </Box>
      </TabPanel>
      <TabPanel value={value} index="four">
        <Box display = "center">
          <p> input team city</p>
          <input type="text" id="lname" name="lname" label="team name"/>
          <button type="button">Submit</button>
          <TeamStatCard data = {props.teamLookup}/>
        </Box>
      </TabPanel>
    </div>
  );
}
