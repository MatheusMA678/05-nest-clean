import { Controller, Get, Post } from '@nestjs/common'
import { AppService } from './app.service'

@Controller('/api/v1')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/hello')
  getHello(): string {
    return this.appService.getHello()
  }

  @Post('/products')
  store(): string {
    return 'Produto criado'
  }
}
