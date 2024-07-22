import { Inject, Injectable } from '@nestjs/common';
import { UpdatePutUserDto } from 'src/infraestructure/controller/dto/request/update-put-user.dto';
import { UserRepository } from 'src/infraestructure/repository/user.repository';

@Injectable()
export class UpdateUserUsecase {
  @Inject(UserRepository)
  private repository: UserRepository;

  async execute(id: number, data: UpdatePutUserDto) {
    return await this.repository.update(id, data);
  }
}
