import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';
import { User, UserDocument } from './schemas/user.schema';

@Injectable()
export class UsersRepository {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}
  
  async findOne(userFilterQuery: FilterQuery<User>): Promise<User> {
    return this.userModel.findOne(userFilterQuery);
  }

  async findAll(usersFilterQuery: FilterQuery<User>): Promise<User []> {
    return this.userModel.find(usersFilterQuery);
  }

  async findOneAndUpdate(userFilterQuery: FilterQuery<User>, user: Partial<User>): Promise<User>{
    return this.userModel.findOneAndUpdate(userFilterQuery, user);
  }

  async create(user: User): Promise<User> {
    const newUser = new this.userModel(user);
    return newUser.save();
  }

  async delete(user: FilterQuery<User>): Promise<any>{
    return this.userModel.deleteOne({ userId: user.userId });
  }
}
