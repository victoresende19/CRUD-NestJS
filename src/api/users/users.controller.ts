import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { UpdateUserDto } from './dto/user.dto';
import { User } from './schemas/user.schema';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get(':userId')
  async getUser(@Param('userId') userId: string): Promise<User> {
    return this.usersService.getUserById(userId);
  }

  @Get()
  async getUsers(): Promise<User[]> {
    return this.usersService.getUsers();
  }

  @Post()
  async createUser(@Body() user: User): Promise<User> {
    return this.usersService.createUser(user);
  }

  @Patch(':userId')
  async updateUser(@Param('userId') userId: string, @Body() updateUserDto: UpdateUserDto): Promise<User> {
    return this.usersService.updateUser(userId, updateUserDto);
  }

  @Delete(':userId')
  async deleteUser(@Param('userId') userId: string): Promise<User> {
    return this.usersService.deleteUser(userId);
  }
}
