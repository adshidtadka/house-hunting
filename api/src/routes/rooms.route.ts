import { Router } from 'express';
import RoomsController from '../controllers/rooms.controller';
import { CreateRoomDto } from '../dtos/rooms.dto';
import Route from '../interfaces/routes.interface';
import validationMiddleware from '../middlewares/validation.middleware';

class RoomsRoute implements Route {
  public path = '/rooms';
  public router = Router();
  public roomsController = new RoomsController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.roomsController.getRooms);
    // this.router.get(`${this.path}/:id(\\d+)`, this.roomsController.getRoomById);
    // this.router.post(`${this.path}`, validationMiddleware(CreateRoomDto, 'body'), this.roomsController.createRoom);
    // this.router.put(`${this.path}/:id(\\d+)`, validationMiddleware(CreateRoomDto, 'body', true), this.roomsController.updateRoom);
    // this.router.delete(`${this.path}/:id(\\d+)`, this.roomsController.deleteRoom);
  }
}

export default RoomsRoute;
