import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { map, Observable } from 'rxjs';

export class SerializeInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, handler: CallHandler): Observable<any> {
    console.log('im running before the handler');

    return handler.handle().pipe(
      map((data: any) => {
        console.log('im running before response is sent out', data);
      }),
    );
  }
}
