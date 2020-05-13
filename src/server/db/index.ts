import * as mysql from 'mysql';
import config from '../config';
import pointLeaders from './pointLeaders';
import reboundLeaders from './reboundLeaders';
import assistLeaders from './assistLeaders';
import coachLookup from './coachLookup';
import teamLookup from './teamLookup';
import playerLookup from './playerLookup';
import longestCoaches from './longestCoaches';
import sixthMan from './sixthMan';
import bestFreeThrowTeam from './bestFreeThrowTeam';

export const connection = mysql.createConnection(config.mysql);

connection.connect(err => {
  if(err) console.log(err)
});

export default {
  pointLeaders,
  reboundLeaders,
  assistLeaders,
  coachLookup,
  teamLookup,
  playerLookup,
  longestCoaches,
  sixthMan,
  bestFreeThrowTeam
}
