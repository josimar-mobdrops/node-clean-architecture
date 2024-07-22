import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from 'src/infraestructure/controller/dto/request/create-user.dto';
import { UpdatePatchUserDto } from 'src/infraestructure/controller/dto/request/update-patch-user.dto';
import { UpdatePutUserDto } from 'src/infraestructure/controller/dto/request/update-put-user.dto';
import { CreateUserResponseDto } from 'src/infraestructure/controller/dto/response/create-user-response.dto';
import { PrismaRepository } from 'src/infraestructure/repository/prisma.repository';


@Injectable()
export class UserService {
  constructor(private prisma: PrismaRepository) {}

}
