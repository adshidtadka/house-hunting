// import bcrypt from 'bcrypt';
// import { CreateRoomDto } from '../dtos/rooms.dto';
// import HttpException from '../exceptions/HttpException';
import { Room } from '../interfaces/rooms.interface';
import * as roomModel from '../models/rooms.model';
// import { isEmpty } from '../utils/util';

class RoomService {
  public async findAllRoom(): Promise<Room[]> {
    const rooms: Room[] = await roomModel.getRooms();
    return rooms;
  }

  public async findRoomById(roomId: number): Promise<Room> {
    const rooms: Room = await roomModel.getRoomById(roomId);
    return rooms;
  }

  public async findRoomsByQuery(query: string): Promise<Room[]> {
    const rooms: Room[] = await roomModel.getRoomByQuery(query);
    return rooms;
  }
  //
  // public async createRoom(roomData: CreateRoomDto): Promise<Room> {
  //   if (isEmpty(roomData)) throw new HttpException(400, "You're not roomData");
  //
  //   const findRoom: Room = this.rooms.find(room => room.email === roomData.email);
  //   if (findRoom) throw new HttpException(409, `You're email ${roomData.email} already exists`);
  //
  //   const hashedPassword = await bcrypt.hash(roomData.password, 10);
  //   const createRoomData: Room = { id: this.rooms.length + 1, ...roomData, password: hashedPassword };
  //
  //   return createRoomData;
  // }
  //
  // public async updateRoom(roomId: number, roomData: Room): Promise<Room[]> {
  //   if (isEmpty(roomData)) throw new HttpException(400, "You're not roomData");
  //
  //   const findRoom: Room = this.rooms.find(room => room.id === roomId);
  //   if (!findRoom) throw new HttpException(409, "You're not room");
  //
  //   const hashedPassword = await bcrypt.hash(roomData.password, 10);
  //   const updateRoomData: Room[] = this.rooms.map((room: Room) => {
  //     if (room.id === findRoom.id) room = { id: roomId, ...roomData, password: hashedPassword };
  //     return room;
  //   });
  //
  //   return updateRoomData;
  // }
  //
  // public async deleteRoom(roomId: number): Promise<Room[]> {
  //   const findRoom: Room = this.rooms.find(room => room.id === roomId);
  //   if (!findRoom) throw new HttpException(409, "You're not room");
  //
  //   const deleteRoomData: Room[] = this.rooms.filter(room => room.id !== findRoom.id);
  //   return deleteRoomData;
  // }
}

export default RoomService;
