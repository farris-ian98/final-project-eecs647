import { connection } from './index';

export const all = async () => {
  return new Promise((resolve, reject) => {
      connection.query('select Player, TRB from PLAYERSTATS group by(TRB) desc limit 0, 5', (err, results) => {
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
