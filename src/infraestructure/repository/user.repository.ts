import { BadGatewayException, Inject, NotFoundException } from '@nestjs/common';
import { PrismaRepository } from './prisma.repository';
import { CreateUserDto } from '../controller/dto/request/create-user.dto';
import { UpdatePutUserDto } from '../controller/dto/request/update-put-user.dto';
import { UpdatePatchUserDto } from '../controller/dto/request/update-patch-user.dto';
import { UserEntity } from 'src/domain/entities/user.entity';

export class UserRepository {
  @Inject(PrismaRepository)
  private prisma: PrismaRepository;

  async create(user: CreateUserDto) {
    try {
      const model = await this.prisma.user.create({
        data: {
          birthat: user.birthAt,
          email: user.email,
          name: user.name,
          password: user.password,
        },
      });
      return toEntity(model);
    } catch {
      throw new BadGatewayException('erro na criação de registro');
    }
  }

  async listAll() {
    const results = await this.prisma.user.findMany();
    const userEntities = [];
    for (const result of results) {
      const userEntity = toEntity(result);
      userEntities.push(userEntity);
    }
    return userEntities;
  }

  async readOne(id: number) {
    const result = await this.prisma.user.findUnique({
      where: { id: id },
    });

    if (!result) {
      throw new NotFoundException('Registro não encontrado!');
    }

    return toEntity(result);
  }

  async update(id: number, data: UpdatePutUserDto) {
    console.log(data);

    const result = await this.prisma.user.update({
      data: {
        birthat: data.birthAt,
        email: data.email,
        name: data.email,
        password: data.password,
      },
      where: { id: id },
    });

    return toEntity(result);
  }

  async updatePartial(id: number, data: UpdatePatchUserDto) {
    console.log(data);
    const result = await this.prisma.user.update({
      data: {
        birthat: data.birthAt,
        email: data.email,
        name: data.email,
        password: data.password,
      },
      where: { id: id },
    });
    return toEntity(result);
  }

  async deleteUser(id: number) {
    return this.prisma.user.delete({
      where: {
        id: id,
      },
    });
  }
}
function toEntity(result) {
  return new UserEntity(
    result.id,
    result.email,
    result.password,
    result.name,
    result.birthat,
  );
}
