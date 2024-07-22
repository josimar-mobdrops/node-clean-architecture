import { Inject, Injectable } from "@nestjs/common";
import { UserRepository } from "src/infraestructure/repository/user.repository";

@Injectable()
export class ListOneUserUsecase {
  @Inject(UserRepository)
  private repository: UserRepository;

  async execute(id: number) {
    return await this.repository.readOne(id);
  }
}
