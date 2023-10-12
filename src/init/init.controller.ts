import { Controller, Get } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { InitService } from "./init.service";


@ApiTags("Init")
@Controller("init")
export class InitController{
    constructor(
        private readonly initService: InitService
    ){};
    
    @Get()
    executeInit(){
        return this.initService.runInit();
    }
}
