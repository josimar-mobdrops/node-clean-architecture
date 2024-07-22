import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { Observable, tap } from 'rxjs';

export class LogInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    const date = Date.now();
    return next
      .handle()
      .pipe(
        tap(() =>
          console.log(
            'Tempo em milisegundo: %s URL: %s Verbo: %s',
            Date.now() - date,
            request.url,
            request.method,
          ),
        ),
      );
  }
}
