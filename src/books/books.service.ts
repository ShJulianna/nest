import { Injectable } from '@nestjs/common';
import { Book } from './interfaces/book.interface';

@Injectable()
export class BooksService {

    private readonly books: Book[] = [
        {
            id: "1",
            title: "Коржики и Президент класса, или Истории о моём друге Ваньке",
            description: "Веселые рассказы",
            authors: "Суслин Д. Ю.",
            favorite: true,
            fileCover: "string",
            fileName: "1.pdf",
            fileBook: "",
        },
        {
            id: "2",
            title: "Дядя Федор, пес и кот",
            description: "В книгу включены две повести-сказки Э.Успенского",
            authors: "Успенский Э. Н.",
            favorite: true,
            fileCover: "string",
            fileName: "2.pdf",
            fileBook: "",

        },
        {
            id: "3",
            title: "Крокодил Гена и его друзья",
            description: "Однажды одинокий крокодил Гена решил изменить свою жизнь!",
            authors: "Успенский Э. Н.",
            favorite: true,
            fileCover: "string",
            fileName: "3.pdf",
            fileBook: "",
        },
        {
            id: "4",
            title: "Рождественские повести",
            description: "Рождественские повести были написаны Диккенсом в 40-х годах",
            authors: "Диккенс Ч.",
            favorite: false,
            fileCover: "string",
            fileName: "4.pdf",
            fileBook: "",
        },
        {
            id: "5",
            title: "Сказки со смыслом",
            description: "Собрание сказок",
            authors: "Клевер Л",
            favorite: false,
            fileCover: "string",
            fileName: "5.pdf",
            fileBook: "",
        }
    ];

    create(book: Book) {
        this.books.push(book);
    }

    findAll(): Book[] {
        return this.books;
    }
}