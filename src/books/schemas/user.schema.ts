import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ required: true })
  public username: string;

  @Prop()
  public password: string;

  @Prop()
  public displayName: string;

  @Prop()
  public email: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
