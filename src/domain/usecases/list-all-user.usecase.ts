import { Inject, Injectable } from '@nestjs/common';
import { UserRepository } from 'src/infraestructure/repository/user.repository';

@Injectable()
export class ListAllUserUsecase {
  @Inject(UserRepository)
  private repository: UserRepository;

  async execute() {
    return await this.repository.listAll();
  }
}
