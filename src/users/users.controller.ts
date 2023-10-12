

import { Controller, Get, Query } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { UsersService } from "./users.service";
import { Auth } from "src/Auth/decorators";
import { ValidRoles } from "src/auth/interfaces";

@ApiTags('Users')
@Controller("users")
export class UsersController {
    constructor(
        private readonly userService: UsersService
    ) { }

    @Get()
    @Auth( ValidRoles.administrador )
    getAll(
        @Query('page') page = 1,
        @Query('limit') limit = 10,
    ) {
        return this.userService.findAll();
    }
}