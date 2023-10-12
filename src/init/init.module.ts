import { Module } from '@nestjs/common';
import { InitController } from './init.controller';
import { InitService } from './init.service';
import { RolesModule } from 'src/roles/roles.module';
import { AuthModule } from 'src/Auth/auth.module';

@Module({
    controllers:[InitController],
    providers:[InitService],
    imports:[
        RolesModule,
        AuthModule
    ]
})
export class InitModule{}