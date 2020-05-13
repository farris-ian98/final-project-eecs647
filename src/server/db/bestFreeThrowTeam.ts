import { connection } from './index';

export const all = async () => {
  return new Promise((resolve, reject) => {
      connection.query('SELECT Location, Team, truncate(AVG(FTPercentage),3) as x FROM PLAYERSTATS JOIN TEAMLIST ON TEAMLIST.AB = PLAYERSTATS.TM GROUP BY (TM) ORDER BY (x) DESC LIMIT 0 , 5', (err, results) => {
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
