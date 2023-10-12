import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RolesController } from './roles.controller';
import { Roles, Roleschema } from './entity/roles.entity';
import { RolesService } from './roles.service';

@Module({
  controllers: [RolesController],
  providers: [RolesService ],
  imports: [
    MongooseModule.forFeature([
      {
        name: Roles.name,
        schema: Roleschema
      }
    ]),

  ],
  exports: [ RolesService, MongooseModule ]
})
export class RolesModule {}
