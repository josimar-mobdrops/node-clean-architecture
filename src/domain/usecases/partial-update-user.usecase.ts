import { Inject, Injectable } from '@nestjs/common';
import { UpdatePatchUserDto } from 'src/infraestructure/controller/dto/request/update-patch-user.dto';
import { UserRepository } from 'src/infraestructure/repository/user.repository';

@Injectable()
export class PartialUpdateUserUsecase {
  @Inject(UserRepository)
  private repository: UserRepository;

  async execute(id: number, data: UpdatePatchUserDto) {
    return await this.repository.updatePartial(id, data);
  }
}
