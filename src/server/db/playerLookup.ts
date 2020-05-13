import { connection } from './index';

export const all = async () => {
  return new Promise((resolve, reject) => {
      connection.query('SELECT Player, MP, PTS, AST, TRB, STL, BLK, FGPercentage, 3PointPercentage, eFGPercentage, FTA, Coach FROM `PLAYERSTATS` JOIN `TEAMLIST` ON TEAMLIST.AB = PLAYERSTATS.Tm WHERE 1 ', (err, results) => {
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
