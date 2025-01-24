import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { hash } from 'bcrypt';
import { capitalizeFirstLetterOfEachWordInAphrase } from 'src/helpers/capitalize';

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    createUserDto.fullname = createUserDto.fullname
      ? capitalizeFirstLetterOfEachWordInAphrase(createUserDto.fullname.trim())
      : '';

    if (await this.checkIfUserExist(createUserDto.email)) {
      throw new BadRequestException(
        `User with email ${createUserDto.email} already exists.`,
      );
    }

    createUserDto.password = await hash(createUserDto.password, 10);

    // return this.prismaService.user.create({
    //   data: {
    //     fullname: createUserDto.fullname,
    //     email: createUserDto.email,
    //     dob: createUserDto.dob,
    //     password: createUserDto.password,
    //     gender: createUserDto.gender,
    //     socialSignIn: createUserDto.socialSignIn,
    //     profile: createUserDto.profile ? {
    //       create: {
    //         bio: createUserDto.profile.bio,
    //         avatarUrl: createUserDto.profile.avatarUrl,
    //       },
    //     } : undefined,
    //     interests: createUserDto.interests ? {
    //       create: createUserDto.interests.map((interest) => ({
    //         interestId: interest,
    //       })),
    //     } : undefined,
    //     partnerPreference: createUserDto.partnerPreference ? {
    //       create: createUserDto.partnerPreference,
    //     } : undefined,
    //   },
    // });
  }

  async findAll() {
    return this.prismaService.user.findMany({
      include: {
        profile: true,
        messagesSent: true,
        messagesReceived: true,
        interests: { include: { interest: true } },
        matchesAsUserOne: true,
        matchesAsUserTwo: true,
        Like: true,
        Report: true,
        FamilyDetails: true,
        UploadPhoto: true,
        PartnerPreference: true,
      },
    });
  }

  async findOne(id: number) {
    return this.getUserById(id, true);
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.getUserById(id);

    if (
      updateUserDto.email &&
      (await this.checkIfEmailExist(updateUserDto.email, id))
    ) {
      throw new BadRequestException('This email has already been taken.');
    }

    if (updateUserDto.password) {
      updateUserDto.password = await hash(updateUserDto.password, 10);
    }

    if (updateUserDto.fullname) {
      updateUserDto.fullname = capitalizeFirstLetterOfEachWordInAphrase(
        updateUserDto.fullname.trim(),
      );
    }

    // return this.prismaService.user.update({
    //   where: { id },
    //   data: {
    //     interests: updateUserDto.interests ? {
    //       deleteMany: {},
    //       create: updateUserDto.interests.map((interest) => ({
    //         interestId: interest,
    //       })),
    //     } : undefined,
    //   profile: updateUserDto.profile ? {
    //     upsert: {
    //       create: {
    //         bio: updateUserDto.profile.bio,
    //         avatarUrl: updateUserDto.profile.avatarUrl,
    //       },
    //       update: {
    //         bio: updateUserDto.profile.bio,
    //         avatarUrl: updateUserDto.profile.avatarUrl,
    //       },
    //     },
    //   } : undefined,
    //   },
    //   include: {
    //     profile: true,
    //     interests: true,
    //   },
    // });
  }

  async remove(id: number) {
    await this.getUserById(id);
    return this.prismaService.user.delete({
      where: { id },
    });
  }

  private async getUserById(id: number, includeRelations = false) {
    const user = await this.prismaService.user.findUnique({
      where: { id },
      include: includeRelations
        ? {
            profile: true,
            messagesSent: true,
            messagesReceived: true,
            interests: { include: { interest: true } },
            matchesAsUserOne: true,
            matchesAsUserTwo: true,
            Like: true,
            Report: true,
            FamilyDetails: true,
            UploadPhoto: true,
            PartnerPreference: true,
          }
        : undefined,
    });

    if (!user) {
      throw new NotFoundException(`User with ID ${id} does not exist.`);
    }

    return user;
  }

  private async checkIfUserExist(email: string, id?: number): Promise<boolean> {
    const user = await this.prismaService.user.findUnique({ where: { email } });
    if (id) {
      return user ? user.id !== id : false;
    }
    return !!user;
  }

  private async checkIfEmailExist(email: string, id?: number): Promise<boolean> {
    if (!email) {
      throw new BadRequestException('Email is required');
    }

    const user = await this.prismaService.user.findUnique({ where: { email } });

    if (id) {
      return user ? user.id !== id : false;
    }
    return !!user;
  }
}
