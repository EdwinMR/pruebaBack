import { Document } from "mongoose";
import { Schema, SchemaFactory, Prop } from "@nestjs/mongoose";

@Schema({
    timestamps:true,
    id:false
})
export class Roles extends Document{
    @Prop({})
    name: string
}

export const Roleschema = SchemaFactory.createForClass( Roles );
