import { Router, Request, Response } from 'express';
import * as mysql from 'mysql';
import Route from '../interfaces/routes.interface';

const config = {
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'house_hunting',
};

class RoomsRoute implements Route {
  public path = '/rooms';
  public router = Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, (_: Request, res: Response) => {
      const connection = this.getConnection();
      const sql = 'SELECT * FROM rooms';
      connection.query(sql, (err, result) => {
        if (err) throw err;
        res.status(200).json({ data: result });
      });
    });
  }

  private getConnection = () => {
    const connection = mysql.createConnection(config);
    connection.connect(err => {
      if (err) throw err;
    });
    return connection;
  };
}

export default RoomsRoute;
