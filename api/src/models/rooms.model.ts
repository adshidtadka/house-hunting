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
    const con = getConnection();
    const sql = 'SELECT * FROM rooms';
    con.query(sql, (err, rows: Room[]) => {
      if (err) throw reject(err);
      resolve(rows);
    });
  });
};

export const getRoomById = (roomId: number): Promise<Room> => {
  return new Promise((resolve, reject) => {
    const con = getConnection();
    const sql = 'SELECT * FROM rooms WHERE id = ?';
    const bind = [roomId];
    con.query(sql, bind, (err, rows: Room[]) => {
      if (err) throw reject(err);
      resolve(rows[0]);
    });
  });
};

export const getRoomByQuery = (query: string): Promise<Room[]> => {
  return new Promise((resolve, reject) => {
    const con = getConnection();
    const ambQuery = `%${query}%`;
    const sql = `SELECT * FROM rooms WHERE name LIKE ? OR station_name LIKE ? OR route_name LIKE ?`;
    const bind = [ambQuery, ambQuery, ambQuery];
    con.query(sql, bind, (err, rows: Room[]) => {
      if (err) throw reject(err);
      resolve(rows);
    });
  });
};

const getConnection = () => {
  const con = mysql.createConnection(config);
  con.connect(err => {
    if (err) throw err;
  });
  return con;
};
