import * as mysql from 'mysql';
import config from '../config';
import pointLeaders from './pointLeaders';
import reboundLeaders from './reboundLeaders';
import assistLeaders from './assistLeaders';
import coachLookup from './coachLookup';
import teamLookup from './teamLookup';
import playerLookup from './playerLookup';

export const connection = mysql.createConnection(config.mysql);

connection.connect(err => {
  if(err) console.log(err)
});

export default {
  pointLeaders
  reboundLeaders
  assistLeaders
  coachLookup
  teamLookup
  playerLookup
}
