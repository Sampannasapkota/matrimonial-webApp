import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';

import {
  Gender,
  DietPreference,
  Religion,
  MaritalStatus,
  EducationLevel,
  EmploymentStatus,
  ResidentialStatus,
  FamilyType,
  MotherTongue,
} from '@prisma/client';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';

@Injectable()
export class ProfilesService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly cloudinaryService: CloudinaryService
  ) {}

  async create(createProfileDto: CreateProfileDto) {
    if (createProfileDto.profilePic) {
      try {
        const result = await this.cloudinaryService.uploadBase64(
          `data:image/jpeg;base64,${createProfileDto.profilePic}`,
          'profile'
        );
        createProfileDto.profilePic = result.secure_url;
      } catch (error) {
        throw new Error(`Failed to upload image to Cloudinary: ${error.message}`);
      }
    }

    const { profilePic, userId, ...rest } = createProfileDto;

    try {
      const profile = await this.prisma.profile.create({
        data: {
          ...rest,
          profilePic: profilePic || null,
          user: {
            connect: { id: createProfileDto.userId },
          },
        },
        include: { user: true },
      });

      return profile;
    } catch (error) {
      throw new Error(`Error creating profile: ${error.message}`);
    }
  }

  async findAll(skip = 0, take = 10) {
    try {
      return await this.prisma.profile.findMany({
        skip,
        take,
        include: { user: true },
      });
    } catch (error) {
      throw new Error(`Error fetching profiles: ${error.message}`);
    }
  }

  async findOne(id: number) {
    try {
      const profile = await this.prisma.profile.findUnique({
        where: { id },
        include: { user: true },
      });

      if (!profile) {
        throw new NotFoundException(`Profile #${id} not found`);
      }

      return profile;
    } catch (error) {
      throw new Error(`Error fetching profile: ${error.message}`);
    }
  }

  async update(id: number, updateProfileDto: UpdateProfileDto) {
    if (updateProfileDto.profilePic) {
      try {
        const result = await this.cloudinaryService.uploadBase64(
          `data:image/jpeg;base64,${updateProfileDto.profilePic}`,
          'profile'
        );
        updateProfileDto.profilePic = result.secure_url;
      } catch (error) {
        throw new Error(`Failed to upload image to Cloudinary: ${error.message}`);
      }
    }

    const { profilePic, ...rest } = updateProfileDto;

    try {
      const profile = await this.prisma.profile.update({
        where: { id },
        data: {
          ...rest,
          profilePic: profilePic || undefined,
        },
        include: { user: true },
      });

      return profile;
    } catch (error) {
      throw new NotFoundException(`Error updating profile: ${error.message}`);
    }
  }

  async remove(id: number) {
    try {
      return await this.prisma.profile.delete({
        where: { id },
      });
    } catch (error) {
      throw new NotFoundException(`Error deleting profile: ${error.message}`);
    }
  }
}
