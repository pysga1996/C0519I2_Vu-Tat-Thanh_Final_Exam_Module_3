import { Component, OnInit } from '@angular/core';
import {Book} from '../book';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {BookService} from '../book.service';

@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.scss']
})
export class ViewBookComponent implements OnInit {

  book: Book;
  message: string;

  constructor(private route: ActivatedRoute, private bookService: BookService) { }

  ngOnInit() {
    this.getBook();
  }

  getBook() {
    this.route.paramMap.subscribe((param: ParamMap) => {
      const id = parseInt(param.get('id'), 10);
      this.bookService.getBook(id).subscribe( next => {
        this.book = next;
      }, error => {
        this.message = 'Cannot retrieve customer detail. Reason: ' + error.message;
      });
    });
  }

}
