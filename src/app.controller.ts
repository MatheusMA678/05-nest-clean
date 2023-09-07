import { Controller, Get, Post } from '@nestjs/common'
import { AppService } from './app.service'
import { PrismaService } from './prisma/prisma.service'

@Controller()
export class AppController {
  constructor(
    private appService: AppService,
    private prisma: PrismaService,
  ) {}

  @Get('/users')
  async getUsers() {
    return await this.prisma.user.findMany()
  }

  @Post('/products')
  store(): string {
    return 'Produto criado'
  }
}
