import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ReportsService {
  constructor(private readonly prismaService: PrismaService) {}

  // Create a new report
  async create(userId: number, reportContent: string) {
    if (!reportContent || reportContent.trim() === '') {
      throw new BadRequestException('Report content cannot be empty.');
    }

    return this.prismaService.report.create({
      data: {
        userId,
        reportContent,
        reportDate: new Date(),
      },
    });
  }

  // Retrieve all reports
  async findAll() {
    return this.prismaService.report.findMany({
      include: {
        user: true, // Include user details
      },
    });
  }

  // Retrieve a single report by ID
  async findOne(id: number) {
    return this.getReportById(id);
    
  }

  // Update a report
  async update(id: number, reportContent: string) {
    if (!reportContent || reportContent.trim() === '') {
      throw new BadRequestException('Report content cannot be empty.');
    }

    const report = await this.getReportById(id);

    return this.prismaService.report.update({
      where: { id },
      data: { reportContent },
    });
  }

  // Delete a report
  async remove(id: number) {
    await this.getReportById(id);
    return this.prismaService.report.delete({ where: { id } });
  }

  // Private helper method to retrieve a report by ID with validation
  private async getReportById(id: number) {
    const report = await this.prismaService.report.findUnique({
      where: { id },
      include: {
        user: true, // Include user details
      },
    });

    if (!report) {
      throw new NotFoundException(`Report with ID ${id} does not exist.`);
    }

    return report;
  }
}
