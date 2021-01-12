import * as mysql from 'mysql';
import { Room } from '../interfaces/rooms.interface';

const config = {
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'house_hunting',
};

export const getRooms = (): Promise<Room[]> => {
  return new Promise((resolve, reject) => {
    const con = mysql.createConnection(config);
    con.connect(err => {
      if (err) throw err;
    });
    const sql = 'SELECT * FROM rooms';
    con.query(sql, (err, rows: Room[]) => {
      if (err) throw reject(err);
      resolve(rows);
    });
  });
};
