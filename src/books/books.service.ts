import { Injectable } from '@nestjs/common';

import {
  Model,
  Connection,
  HydratedDocument,
  QueryWithHelpers,
} from 'mongoose';
import { InjectModel, InjectConnection } from '@nestjs/mongoose';
import { Book, BookDocument } from './schemas/book.schema';
import { CreateBookDto } from './interfaces/book.interface';

@Injectable()
export class BooksService {
  constructor(
    @InjectModel(Book.name) private BookModel: Model<BookDocument>,
    @InjectConnection() private connection: Connection,
  ) {}

  create(book: CreateBookDto): Promise<BookDocument> {
    const newBook = new this.BookModel(book);
    return newBook.save();
  }
  public getAll(): Promise<BookDocument[]> {
    return this.BookModel.find().exec();
  }

  public update(
    id: string,
    data: CreateBookDto,
  ): QueryWithHelpers<
    HydratedDocument<BookDocument> | null,
    HydratedDocument<BookDocument>,
    {},
    BookDocument
  > {
    return this.BookModel.findOneAndUpdate({ _id: id }, data);
  }

  public delete(
    id: string,
  ): QueryWithHelpers<
    HydratedDocument<BookDocument> | null,
    HydratedDocument<BookDocument>,
    {},
    BookDocument
  > {
    return this.BookModel.findOneAndDelete({ _id: id });
  }
}
