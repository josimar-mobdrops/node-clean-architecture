import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { UserController } from '../controller/user.controller';
import { PrismaModule } from './prisma.module';
import { UserIdCheckMiddleware } from '../controller/middleware/user-id-check.middleware';
import { CreateUserUsecase } from 'src/domain/usecases/create-user.usecase';
import { UserRepository } from '../repository/user.repository';
import { ListAllUserUsecase } from 'src/domain/usecases/list-all-user.usecase';
import { ListOneUserUsecase } from 'src/domain/usecases/list-one-user.usecase';
import { DeleteUserUsecase } from 'src/domain/usecases/delete-user.usecase';
import { PartialUpdateUserUsecase } from 'src/domain/usecases/partial-update-user.usecase';
import { UpdateUserUsecase } from 'src/domain/usecases/update-user.usecase';

@Module({
  imports: [PrismaModule],
  controllers: [UserController],
  providers: [
    CreateUserUsecase,
    UserRepository,
    ListAllUserUsecase,
    ListOneUserUsecase,
    UpdateUserUsecase,
    PartialUpdateUserUsecase,
    DeleteUserUsecase,
  ],

  exports: [],
})
export class UserModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(UserIdCheckMiddleware).forRoutes({
      path: 'users/:id',
      method: RequestMethod.ALL,
    });
  }
}
