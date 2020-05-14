import { connection } from './index';

export const all = async () => {
  return new Promise((resolve, reject) => {
      connection.query('SELECT LOCATION, Team, Conference, W, L, PtsFor, PtsA, Coach, Arena, Attendance, PLAYER, PTS FROM `TEAMLIST` t INNER JOIN (SELECT PLAYER, j.Tm, PTS FROM `PLAYERSTATS` p RIGHT JOIN (SELECT Tm, MAX( PTS ) AS MaxPoints FROM `PLAYERSTATS` d GROUP BY Tm) j ON j.Tm = p.Tm AND p.PTS = MaxPoints)n ON t.AB = n.Tm', (err, results) => {
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
