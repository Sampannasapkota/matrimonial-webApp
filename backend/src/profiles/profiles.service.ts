import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProfileDto } from './dto/create-profile.dto';

import {
  Gender,
  DietPreference,
  Religion,
  MaritalStatus,
  EducationLevel,
  EmploymentStatus,
} from '@prisma/client';
import { Profile } from './entities/profile.entity';

@Injectable()
export class ProfilesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createProfileDto: CreateProfileDto) {
    const {
      userId,
      districtId,
      gender,
      profilePic,
      dietPreference,
      ageRange,
      dateOfBirth,
      religion,
      height,
      maritalStatus,
      educationStatus,
      employmentStatus,
      partnerPreference,
    } = createProfileDto;

    const profile = await this.prisma.profile.create({
      data: {
        userId,
        districtId,
        gender,
        profilePic,
        dietPreference,
        ageRange,
        dateOfBirth,
        religion,

        height,
        maritalStatus,
        educationStatus,
        employmentStatus,
        partnerPreference,
      },
    });

    return profile;
  }

  async findOne(id: number) {
    const profile = await this.prisma.profile.findUnique({
      where: { id },
    });

    if (!profile) {
      throw new NotFoundException(`Profile #${id} not found`);
    }

    return profile;
  }

  async update(id: number, updateData: Partial<CreateProfileDto>) {
    const profile = await this.prisma.profile.update({
      where: { id },
      data: updateData,
    });

    if (!profile) {
      throw new NotFoundException(`Profile #${id} not found`);
    }

    return profile;
  }

  async remove(id: number) {
    try {
      return await this.prisma.profile.delete({
        where: { id },
      });
    } catch (error) {
      throw new NotFoundException(`profile with ID ${id} not found`);
    }
  }

  async findAll(skip = 0, take = 10) {
    return await this.prisma.profile.findMany({
      skip,
      take,
    });
  }
}
