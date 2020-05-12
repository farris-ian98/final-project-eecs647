import { connection } from './index';

export const all = async () => {
  return new Promise((resolve, reject) => {
      connection.query('select Player, AST from PLAYERSTATS group by(AST) desc limit 0, 5', (err, results) => {
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
