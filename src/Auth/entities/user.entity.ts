import { Document, SchemaTypes, Types } from "mongoose";
import { Schema, SchemaFactory, Prop } from "@nestjs/mongoose";
import { Roles } from "src/roles/entity/roles.entity";

@Schema({
    timestamps:true
})
export class User extends Document{

    @Prop({
        unique:true,
        index: true
    })
    email: string

    @Prop()
    password: string

    @Prop({type: SchemaTypes.ObjectId, ref: Roles.name})
    role: Types.ObjectId
}

export const Userschema = SchemaFactory.createForClass( User );
