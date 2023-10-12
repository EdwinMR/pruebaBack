import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User } from "src/auth/entities/user.entity";
import { initialData } from "./data/init-data";
import { Roles } from "src/roles/entity/roles.entity";


@Injectable()
export class InitService{

    constructor(
        @InjectModel(User.name)
        private readonly userModel: Model<User>,

        @InjectModel(Roles.name)
        private readonly rolesModel: Model<Roles>
    ){}

    async runInit(){
        await this.userModel.deleteMany();
        await this.rolesModel.deleteMany();
        const initUsers = initialData.users;
        const initRoles = initialData.roles;

        this.userModel.insertMany(initUsers);
        this.rolesModel.insertMany(initRoles);

        return "success"

        
        

    }
}