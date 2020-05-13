import { connection } from './index';

export const all = async () => {
  return new Promise((resolve, reject) => {
      connection.query('SELECT TM, PLAYER, PTS, TRB, AST, STL, BLK FROM `PLAYERSTATS` WHERE (2 * GS) < G GROUP BY (PTS + TRB + AST + STL + BLK) DESC LIMIT 0, 5', (err, results) => {
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
