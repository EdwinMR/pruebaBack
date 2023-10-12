import { Injectable } from "@nestjs/common";
import { Roles } from "./entity/roles.entity";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

@Injectable()
export class RolesService{
    
    constructor(
        @InjectModel(Roles.name)
        private readonly userModel: Model<Roles>
    ){

    }

    async getAll(){
        return this.userModel.find();
    }
}