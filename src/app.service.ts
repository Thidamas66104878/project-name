import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): any {
    return {
      name: 'Thidamas Srichai',
      id: 66104878
    };
  }
}
