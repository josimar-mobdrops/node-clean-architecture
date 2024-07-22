import { BadGatewayException, Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/infraestructure/controller/dto/request/create-user.dto';
import { UserRepository } from 'src/infraestructure/repository/user.repository';

@Injectable()
export class CreateUserUsecase {
  @Inject(UserRepository)
  private repository: UserRepository;

  async execute(user: CreateUserDto) {
    try {
      return this.repository.create(user);
    } catch {
      throw new BadGatewayException(
        'Erro ao inserir registro em base de dados',
      );
    }
  }
}
