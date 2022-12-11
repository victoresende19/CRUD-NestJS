import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './api/users/users.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/users'), UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
