import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { UpdateUserDto } from './dto/user.dto';

import { User } from './schemas/user.schema';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async getUserById(userId: string): Promise<User> {
    return this.usersRepository.findOne({userId});
  }

  async getUsers(): Promise<User[]> {
    return this.usersRepository.findAll({});
  }

  async createUser(user: User): Promise<User> {
    return this.usersRepository.create({
      userId: uuidv4(user.userId),
      email: user.email,
      name: user.name,
      age: user.age,
      favoriteFoods: user.favoriteFoods,
    });
  }

  async updateUser(userId: string, userUpdates: UpdateUserDto): Promise<User> {
    return this.usersRepository.findOneAndUpdate({ userId }, userUpdates);
  }

  async deleteUser(userId: string): Promise<User>{
    return this.usersRepository.delete({userId})
  }
}
