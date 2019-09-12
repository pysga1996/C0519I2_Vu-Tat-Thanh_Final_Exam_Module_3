import { Component, OnInit } from '@angular/core';
import {Book} from '../book';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {BookService} from '../book.service';

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.scss']
})
export class DeleteBookComponent implements OnInit {
  message: string;
  book: Book;
  constructor(private route: ActivatedRoute, private bookService: BookService) { }

  ngOnInit() {
    this.route.paramMap.subscribe( (param: ParamMap) => {
      const id = parseInt(param.get('id'), 10);
      this.bookService.getBook(id).subscribe(result => {
        this.book = result;
      }, error => {
        this.message = 'Cannot retrieve book\' information. Reason: ' + error.message;
      });
    }, error1 => {
      this.message = 'Cannot get id parameter from url. Reason: ' + error1.message;
    });
  }

  deleteBook() {
    this.bookService.deleteBook(this.book.id).subscribe( (result) => {
      this.message = 'Book\'s information removed successfully!';
      this.book = null;
    }, error => {
      this.message = 'Cannot remove book\' information. Reason: ' + error.message;
    });
  }

}
