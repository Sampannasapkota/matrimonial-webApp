import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { NotificationsService } from './notifications.service';
import { NotificationsGateway } from './notifications.gateway';
import { NotificationsController } from './notifications.controller';

@Module({
  providers: [NotificationsService, PrismaService, NotificationsGateway],
  controllers: [NotificationsController],
})
export class NotificationsModule {}
