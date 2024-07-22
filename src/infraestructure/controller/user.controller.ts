import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
  UseInterceptors,
} from '@nestjs/common';
import { CreateUserDto } from './dto/request/create-user.dto';
import { UpdatePutUserDto } from './dto/request/update-put-user.dto';
import { UpdatePatchUserDto } from './dto/request/update-patch-user.dto';
import { LogInterceptor } from '../interceptors/log.interceptor';
import { CreateUserUsecase } from 'src/domain/usecases/create-user.usecase';
import { ListAllUserUsecase } from 'src/domain/usecases/list-all-user.usecase';
import { ListOneUserUsecase } from 'src/domain/usecases/list-one-user.usecase';
import { UpdateUserUsecase } from 'src/domain/usecases/update-user.usecase';
import { PartialUpdateUserUsecase } from 'src/domain/usecases/partial-update-user.usecase';
import { DeleteUserUsecase } from 'src/domain/usecases/delete-user.usecase';

@UseInterceptors(LogInterceptor)
@Controller('users')
export class UserController {

  @Inject(CreateUserUsecase)
  private createUser: CreateUserUsecase;

  @Inject(ListAllUserUsecase)
  private listAllUseCase: ListAllUserUsecase;

  @Inject(ListOneUserUsecase)
  private listOneUseCase: ListOneUserUsecase;

  @Inject(UpdateUserUsecase)
  private updateUserUsecase: UpdateUserUsecase;

  @Inject(PartialUpdateUserUsecase)
  private partialUpdateUserUsecase: PartialUpdateUserUsecase;

  @Inject(DeleteUserUsecase)
  private deleteUserUsecase: DeleteUserUsecase;

  @Post()
  async create(@Body() user: CreateUserDto) {
    return this.createUser.execute(user);
  }

  @Get()
  async list() {
    return this.listAllUseCase.execute();
  }

  @Get(':id')
  async readOne(@Param('id', ParseIntPipe) id: number) {
    return this.listOneUseCase.execute(id);
  }

  @Put(':id')
  async update(
    @Body() body: UpdatePutUserDto,
    @Param('id', ParseIntPipe) params,
  ) {
    return this.updateUserUsecase.execute(params, body);
  }

  @Patch(':id')
  async updateOne(
    @Body() body: UpdatePatchUserDto,
    @Param('id', ParseIntPipe) params,
  ) {
    return this.partialUpdateUserUsecase.execute(params, body);
  }
  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    return this.deleteUserUsecase.execute(id);
  }
}
