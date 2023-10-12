import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { User } from "src/auth/entities/user.entity";
import { Model } from "mongoose";
import { Roles } from "src/roles/entity/roles.entity";

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(User.name)
        private readonly userRepository: Model<User>,

        @InjectModel(Roles.name)
        private readonly rolesRepository: Model<Roles>
    ) { }

    async findAll(page = 1, limit = 10) {
        /*this.userRepository.aggregate([
            { '$lookup' : {'from': Roles.name, 'localField' : 'role', 'foreignField': '_id', 'as' : 'roleValue' }},
            {
                '$project': {
                  _id: 1,
                  email: 2,
                  roleValue: 3,
                }
            },     
            {
                '$facet': {
                    metadata: [{ $count: "total" }, { $addFields: { page: page } }],
                    data: [{ $skip: (page*limit)-limit }, { $limit: limit }]
                }
            }
        ])*/
        let roles = (await this.rolesRepository.find());
        let users = await this.userRepository.aggregate([
            {
                '$project': {
                  _id: 1,
                  email: 2,
                  role:3
                }
            },     
            {
                '$facet': {
                    metadata: [{ $count: "total" }, { $addFields: { page: page } }],
                    data: [{ $skip: (page*limit)-limit }, { $limit: limit }]
                }
            }
        ])
        console.log("roles",roles)
        return users[0].data.map((elem)=>{
            var role = roles.find(role=> role._id.toString() == elem.role.toString())
            console.log(role)
            elem.role = role.name
            return elem
        })
    }
}