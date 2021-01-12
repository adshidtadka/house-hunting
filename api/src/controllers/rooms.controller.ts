import { NextFunction, Request, Response } from 'express';
// import { CreateRoomDto } from '../dtos/rooms.dto';
import { Room } from '../interfaces/rooms.interface';
import roomService from '../services/rooms.service';

class RoomsController {
  public roomService = new roomService();

  public getRooms = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      if (req.query.q) {
        const findRoomsData: Room[] = await this.roomService.findRoomsByQuery(String(req.query.q));
        res.status(200).json({ data: findRoomsData, message: 'findRoomsByQuery' });
      } else {
        const findAllRoomsData: Room[] = await this.roomService.findAllRoom();
        res.status(200).json({ data: findAllRoomsData, message: 'findAll' });
      }
    } catch (error) {
      next(error);
    }
  };

  public getRoomById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const roomId = Number(req.params.id);
      const findOneRoomData: Room = await this.roomService.findRoomById(roomId);

      res.status(200).json({ data: findOneRoomData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  // public createRoom = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  //   try {
  //     const roomData: CreateRoomDto = req.body;
  //     const createRoomData: Room = await this.roomService.createRoom(roomData);
  //
  //     res.status(201).json({ data: createRoomData, message: 'created' });
  //   } catch (error) {
  //     next(error);
  //   }
  // };
  //
  // public updateRoom = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  //   try {
  //     const roomId = Number(req.params.id);
  //     const roomData: Room = req.body;
  //     const updateRoomData: Room[] = await this.roomService.updateRoom(roomId, roomData);
  //
  //     res.status(200).json({ data: updateRoomData, message: 'updated' });
  //   } catch (error) {
  //     next(error);
  //   }
  // };
  //
  // public deleteRoom = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  //   try {
  //     const roomId = Number(req.params.id);
  //     const deleteRoomData: Room[] = await this.roomService.deleteRoom(roomId);
  //
  //     res.status(200).json({ data: deleteRoomData, message: 'deleted' });
  //   } catch (error) {
  //     next(error);
  //   }
  // };
}

export default RoomsController;
