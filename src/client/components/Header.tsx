import React, { useState } from 'react';
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
import LongestCoaches from './LongestCoaches.tsx';
import SixthMan from './SixthMan.tsx';
import FreeThrows from './FreeThrows.tsx';

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
  let submitted = false;
  const classes = useStyles();
  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [name, setName] = useState('');
  const [name2, setName2] = useState('');
  const [name3, setName3] = useState('');
  const [name4, setName4] = useState('');
  const [name5, setName5] = useState('');
  const [name6, setName6] = useState('');

  const handleSubmit = (evt) => {
      evt.preventDefault();
      alert(`Submitting Name ${name}`)
  }
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
        <Box display = "flex">
          <LongestCoaches data = {props.longestCoaches}/>
          <SixthMan data = {props.sixthMan}/>
          <FreeThrows data = {props.freeThrowTeam}/>
        </Box>
      </TabPanel>
      <TabPanel value={value} index="two">
        <form onSubmit={handleSubmit}>
          <label>
            input player name 1:  &nbsp;
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </label>
           &nbsp; &nbsp;
          <label>
            input player name 2:  &nbsp;
            <input
              type="text"
              value={name4}
              onChange={e => setName4(e.target.value)}
            />
          </label>
        </form>
        <Box display = "flex">
          {name ? <PlayerStatCard data = {props.playerLookup} pName = {name}/> : null}
          {name4 ? <PlayerStatCard data = {props.playerLookup} pName = {name4}/> : null}
        </Box>
      </TabPanel>
      <TabPanel value={value} index="three">
        <form onSubmit={handleSubmit}>
          <label>
            input coach name 1: &nbsp;
            <input
              type="text"
              value={name2}
              onChange={e => setName2(e.target.value)}
            />
          </label>
           &nbsp;  &nbsp;
          <label>
            input coach name 2:  &nbsp;
            <input
              type="text"
              value={name5}
              onChange={e => setName5(e.target.value)}
            />
          </label>
        </form>
        <Box display = "flex">
          {name2 ? <CoachStatCard data = {props.coachLookup} cName = {name2}/> : null}
          {name5 ? <CoachStatCard data = {props.coachLookup} cName = {name5}/> : null}
        </Box>
      </TabPanel>
      <TabPanel value={value} index="four">
        <form onSubmit={handleSubmit}>
          <label>
            input team name 1: &nbsp;
            <input
              type="text"
              value={name3}
              onChange={e => setName3(e.target.value)}
            />
          </label>
          &nbsp; &nbsp;
          <label>
            input team name 2: &nbsp;
            <input
              type="text"
              value={name6}
              onChange={e => setName6(e.target.value)}
            />
          </label>

        </form>
        <Box display = "flex">
          {name3 ? <TeamStatCard data = {props.teamLookup} tName = {name3}/> : null}
          {name6 ? <TeamStatCard data = {props.teamLookup} tName = {name6}/> : null}
        </Box>
      </TabPanel>
    </div>
  );
}
