import { Body, Controller, Delete, Get, HttpStatus, Param, Patch, Post, Res, UseInterceptors } from '@nestjs/common';
import { UpdateUserDto } from './dto/user.dto';
import { BenchmarkInterceptor } from './Interceptors/benchamark.interceptor';
import { User } from './schemas/user.schema';
import { UsersService } from './users.service';

@Controller('users')
@UseInterceptors(BenchmarkInterceptor)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get(':userId')
  async getUser(@Param('userId') userId: string, @Res() response): Promise<User> {
    return response.json({
      data: await this.usersService.getUserById(userId)
    });
  }

  @Get()
  async getUsers(@Res() response): Promise<User[]> {
    return response.json({
      data: await this.usersService.getUsers()
    });
  }

  @Post('query')
  async getUserByQuery(@Body() query: string, @Res() response): Promise<User> {
    return response.json({
      data: await this.usersService.getUsersByQuery(query)
    });
  }

  @Post()
  async createUser(@Body() user: User, @Res() response): Promise<User> {
    return response.json({
      data: await this.usersService.createUser(user)
    });
  }

  @Patch(':userId')
  async updateUser(@Param('userId') userId: string, @Body() updateUserDto: UpdateUserDto, @Res() response): Promise<User> {
    return response.json({
      data: await this.usersService.updateUser(userId, updateUserDto)
    });
  }

  @Delete(':userId')
  async deleteUser(@Param('userId') userId: string, @Res() response): Promise<User> {
    return response.json({
      data: await this.usersService.deleteUser(userId)
    });
  }
}
