import { MiddlewareConsumer, Module, NestModule, RequestMethod } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { LoggerUpdateMiddleware } from "./middleware/logger-update.middeware";
import { LoggerDeleteMiddleware } from "./middleware/logger-delete.middleware";
import { User, UserSchema } from "./schemas/user.schema";
import { UsersController } from "./users.controller";
import { UsersRepository } from "./users.repository";
import { UsersService } from "./users.service";

@Module({
  imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])],
  controllers: [UsersController],
  providers: [UsersService, UsersRepository]
})

export class UsersModule implements NestModule {
  configure(consumer: MiddlewareConsumer){
    consumer
      .apply(LoggerDeleteMiddleware)
      .forRoutes({ 
        path: 'users/:userId', 
        method: RequestMethod.DELETE 
      })

    consumer 
      .apply(LoggerUpdateMiddleware)
      .forRoutes({
        path: 'users/:userId',
        method: RequestMethod.PATCH 
      })  
  }
}