import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { RolesModule } from 'src/roles/roles.module';
import { AuthModule } from 'src/Auth/auth.module';

@Module({
    controllers:[UsersController],
    providers:[UsersService],
    imports:[
        RolesModule,
        AuthModule
    ]
})
export class UsersModel{}