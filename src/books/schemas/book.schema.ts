import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
// import { User } from './user.schema';

export type BookDocument = Book & Document;

@Schema()
export class Book {
  @Prop({ required: true })
  public title: string;

  @Prop({ required: false })
  public description: string;

  @Prop()
  public authors: string;

  @Prop()
  public favorite: boolean;

  @Prop()
  public fileCover: string;

  @Prop()
  public fileName: string;

  // @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'User' })
  // user: User;
}

export const BookSchema = SchemaFactory.createForClass(Book);
