import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway({cors:true})
export class NotificationsGateway{
    @WebSocketServer()
    server: Server;
    sendNotification(userId:number,message:string){
        this.server.to(`user-${userId}`).emit('new-notification',{message});
    }
}