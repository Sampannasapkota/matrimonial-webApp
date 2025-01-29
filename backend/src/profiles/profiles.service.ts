// import {
//   BadRequestException,
//   Injectable,
//   NotFoundException,
// } from '@nestjs/common';
// import { PrismaService } from 'src/prisma/prisma.service';
// import { CreateProfileDto } from './dto/create-profile.dto';
// import { UpdateProfileDto } from './dto/update-profile.dto';

// @Injectable()
// export class ProfilesService {
//   constructor(private prismaService: PrismaService) {}

//   async create(createProfileDto: CreateProfileDto) {
//     // Check if the related user exists
//     const userExists = await this.prismaService.user.findUnique({
//       where: { id: createProfileDto.userId },
//     });

//     if (!userExists) {
//       throw new NotFoundException(`User with ID ${createProfileDto.userId} does not exist`);
//     }

//     return this.prismaService.profile.create({
//       data: {
//         userId: createProfileDto.userId,
//         gender: createProfileDto.gender,
//         dietPreference: createProfileDto.dietPreference,
//         ageRange: createProfileDto.ageRange,
//         dateOfBirth: createProfileDto.dateOfBirth,
//         religion: createProfileDto.religion,
//         province: createProfileDto.province,
//         district: createProfileDto.district,
//         residentialStatus: createProfileDto.residentialStatus,
//         familyType: createProfileDto.familyType,
//         height: createProfileDto.height,
//         incomeRange: createProfileDto.incomeRange,
//         maritalStatus: createProfileDto.maritalStatus,
//         educationLevel: createProfileDto.educationLevel,
//         employmentStatus: createProfileDto.employmentStatus,
//         motherTongue: createProfileDto.motherTongue,
//       },
//     });
//   }

//   async findAll() {
//     return this.prismaService.profile.findMany({
//       include: {
//         user: true, // Include the related user details
//       },
//     });
//   }

//   async findOne(id: number) {
//     return this.getProfileById(id);
//   }

//   async update(id: number, updateProfileDto: UpdateProfileDto) {
//     // Ensure the profile exists
//     await this.getProfileById(id);

//     // If userId is being updated, check if the new user exists
//     if (updateProfileDto.userId) {
//       const userExists = await this.prismaService.user.findUnique({
//         where: { id: updateProfileDto.userId },
//       });

//       if (!userExists) {
//         throw new NotFoundException(`User with ID ${updateProfileDto.userId} does not exist`);
//       }
//     }

//     return this.prismaService.profile.update({
//       where: { id },
//       data: {
//         ...updateProfileDto,
//       },
//     });
//   }

//   async remove(id: number) {
//     // Ensure the profile exists
//     await this.getProfileById(id);

//     return this.prismaService.profile.delete({
//       where: { id },
//     });
//   }

//   private async getProfileById(id: number) {
//     const profile = await this.prismaService.profile.findUnique({
//       where: { id },
//       include: {
//         user: true, // Include the related user details
//       },
//     });

//     if (!profile) {
//       throw new NotFoundException(`Profile with ID ${id} does not exist`);
//     }

//     return profile;
//   }
// }
