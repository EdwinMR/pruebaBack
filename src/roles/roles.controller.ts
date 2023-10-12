import { Controller, Get } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { RolesService } from "./roles.service";


@ApiTags("Roles")
@Controller("roles")
export class RolesController{
    
    constructor(
        private readonly rolesService: RolesService
    ){}
    @Get()
    findAll(){
        return this.rolesService.getAll();
    }

}