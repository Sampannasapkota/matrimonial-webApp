import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class NotificationsService {
  constructor(private readonly prismaService: PrismaService) {}
  async createNotification(userId: number, message: string) {
    return this.prismaService.notification.create({
      data: {
        userId,
        message,
      },
    });
  }
  async getUserNotifications(userId: number) {
    return this.prismaService.notification.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
    });
  }
}
