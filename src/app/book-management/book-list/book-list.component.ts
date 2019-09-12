import { Component, OnInit } from '@angular/core';
import {BookService} from '../book.service';
import {Book} from '../book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  message: string;
  bookList: Book[] = [];
  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.getBookList();
  }

  getBookList() {
    this.bookService.getBookList().subscribe(
      (result) => {
        this.bookList = result;
      },
      (error) => {
        this.message = 'Cannot retrieve book list. Here\'s the error' + error.message;
      }
    );
  }
}
