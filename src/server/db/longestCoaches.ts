import { connection } from './index';

export const all = async () => {
  return new Promise((resolve, reject) => {
      connection.query('SELECT AB, c.Coach, Yrs FROM COACHES c INNER JOIN TEAMLIST t ON c.Coach = t.COACH WHERE Yrs >15 GROUP BY Yrs DESC LIMIT 0 , 5', (err, results) => {
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
