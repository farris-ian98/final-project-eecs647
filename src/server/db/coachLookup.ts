import { connection } from './index';

export const all = async () => {
  return new Promise((resolve, reject) => {
      connection.query('SELECT Coach, Yrs, G, WLPercentage, PlayoffG, PlayoffWLPercentage, Conf, Champ FROM `COACHES` WHERE Coach = "Phil Jackson" ', (err, results) => {
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
