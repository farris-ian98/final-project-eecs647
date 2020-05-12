import { connection } from './index';

export const all = async () => {
  return new Promise((resolve, reject) => {
      connection.query('SELECT LOCATION, Team, Conference, W, L, PtsFor, PtsA, Coach, Arena, Attendance, PLAYER from `TEAMLIST` JOIN PLAYERSTATS ON TEAMLIST.AB = PLAYERSTATS.Tm WHERE LOCATION = "Miami" GROUP BY (PTS) DESC LIMIT 0 , 1', (err, results) => {
        if(err){
          return reject(err);
        }
        resolve(results)
      });
  })
}

export default {
  all
}
