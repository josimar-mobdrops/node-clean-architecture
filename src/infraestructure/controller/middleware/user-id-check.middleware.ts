import { BadRequestException, NestMiddleware } from '@nestjs/common';

export class UserIdCheckMiddleware implements NestMiddleware {
  use(req: any, res: any, next: (error?: Error | any) => void) {
    console.log('antes da regra');
    if (isNaN(Number(req.params.id)) || Number(req.params.id) <= 0) {
      console.log('Dentro da exceção');
      throw new BadRequestException('Id Inválido!');
    }
    console.log('Após a regra');
    next();
  }
}
