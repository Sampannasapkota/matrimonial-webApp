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

  async create(CreateUserDto: CreateUserDto) {
    CreateUserDto.fullname = CreateUserDto.fullname
      ? capitalizeFirstLetterOfEachWordInAphrase(CreateUserDto.fullname)
      : '';

    if (await this.checkIfUserExist(CreateUserDto.fullname)) {
      throw new BadRequestException(
        `User ${CreateUserDto.fullname}has alrready been taken`,
      );
    }
    const roleObj = await this.prismaService.role.findFirst({
      where: { name: CreateUserDto.role },
    });

    if (!roleObj) {
      throw new NotFoundException(
        `Unable to find the role ${CreateUserDto.role}`,
      );
    }
    CreateUserDto.roleId = roleObj.id;

    return this.prismaService.user.create({
      data: CreateUserDto,
    });
  }

  findAll() {
    return this.prismaService.user.findMany();
  }

  async findOne(id: number) {
    return this.getUserById(id);
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
      UpdateUserDto.fullname = UpdateUserDto.fullname
        ? capitalizeFirstLetterOfEachWordInAphrase(UpdateUserDto.fullname)
        : '';
    }
    return this.prismaService.user.update({
      where: { id },
      data: updateUserDto,
    });
  }

  async remove(id: number) {
    await this.getUserById(id);
    return this.prismaService.user.delete({
      where: { id },
    });
  }

  private async getUserById(id: number) {
    const user = await this.prismaService.user.findFirst({ where: { id } });
    if (!user) {
      throw new NotFoundException(`User with ID ${id} does not exist.`);
    }
    return user;
  }
  private async checkIfUserExist(name: string, id?: number): Promise<boolean> {
    const user = await this.prismaService.user.findFirst({
      where: { fullname: name },
    });

    if (id) {
      return user ? user.id !== id : false;
    }
    return !!user;
  }

  private async checkIfEmailExist(
    email: string,
    id?: number,
  ): Promise<boolean> {
    if (!email) {
      throw new BadRequestException('Email is required');
    }
    const user = await this.prismaService.user.findUnique({
      where: { email },
    });

    if (id) {
      return user ? user.id !== id : false;
    }
    return !!user;
  }
}
