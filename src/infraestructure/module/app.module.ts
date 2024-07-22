import { Module } from '@nestjs/common';
import { UserModule } from './user.module';
import { UserController } from 'src/infraestructure/controller/user.controller';
import { UserService } from 'src/domain/usecases/user.service';
import { PrismaModule } from './prisma.module';
import { UserRepository } from '../repository/user.repository';
import { CreateUserUsecase } from 'src/domain/usecases/create-user.usecase';
import { ListAllUserUsecase } from 'src/domain/usecases/list-all-user.usecase';
import { ListOneUserUsecase } from 'src/domain/usecases/list-one-user.usecase';
import { UpdateUserUsecase } from 'src/domain/usecases/update-user.usecase';
import { PartialUpdateUserUsecase } from 'src/domain/usecases/partial-update-user.usecase';
import { DeleteUserUsecase } from 'src/domain/usecases/delete-user.usecase';

@Module({
  imports: [UserModule, PrismaModule],
  controllers: [UserController],
  providers: [
    UserService,
    CreateUserUsecase,
    UserRepository,
    ListAllUserUsecase,
    ListOneUserUsecase,
    UpdateUserUsecase,
    PartialUpdateUserUsecase,
    DeleteUserUsecase,
  ],
})
export class AppModule {}
