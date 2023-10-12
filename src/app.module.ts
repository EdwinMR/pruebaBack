import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './Auth/auth.module';
import { RolesModule } from './roles/roles.module';
import { InitModule } from './init/init.module';
import { UsersModel } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGODB),
    AuthModule,
    RolesModule,
    InitModule,
    UsersModel
  ],
})
export class AppModule {}
