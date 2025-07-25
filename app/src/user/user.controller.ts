import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() body: { name: string; email: string }) {
    return this.userService.create(body.name, body.email);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }
}
