import { connection } from './index';

export const all = async () => {
  return new Promise((resolve, reject) => {
      connection.query('select Player, PTS from PLAYERSTATS group by(PTS) desc limit 0, 5', (err, results) => {
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
