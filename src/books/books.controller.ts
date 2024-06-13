import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './interfaces/book.interface';
import { BookDocument } from './schemas/book.schema';
import { HydratedDocument, QueryWithHelpers } from 'mongoose';

export interface IParamId {
  id: string;
}

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post()
  public create(@Body() body: CreateBookDto): Promise<BookDocument> {
    return this.booksService.create(body);
  }
  @Get()
  public getAll(): Promise<BookDocument[]> {
    return this.booksService.getAll();
  }

  @Put(':id')
  public update(
    @Param() { id }: IParamId,
    @Body() body: CreateBookDto,
  ): QueryWithHelpers<
    HydratedDocument<BookDocument> | null,
    HydratedDocument<BookDocument>,
    {},
    BookDocument
  > {
    return this.booksService.update(id, body);
  }

  @Delete(':id')
  public delete(
    @Param() { id }: IParamId,
  ): QueryWithHelpers<
    HydratedDocument<BookDocument> | null,
    HydratedDocument<BookDocument>,
    {},
    BookDocument
  > {
    return this.booksService.delete(id);
  }
}
