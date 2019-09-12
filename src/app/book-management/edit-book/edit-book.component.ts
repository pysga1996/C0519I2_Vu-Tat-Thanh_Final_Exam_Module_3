import { Component, OnInit } from '@angular/core';
import {Book} from '../book';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {BookService} from '../book.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.scss']
})
export class EditBookComponent implements OnInit {

  message: string;
  book: Book;
  constructor(private route: ActivatedRoute, private bookService: BookService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((param: ParamMap) => {
      const id = parseInt(param.get('id'), 10);
      this.bookService.getBook(id).subscribe( next => {
        this.book = next;
      }, error => {
        this.message = 'Cannot retrieve book\' information. Reason: ' + error.message;
      });
    });
  }

  editBook(bookEditForm) {
    this.bookService.editBook(this.book.id, bookEditForm.value).subscribe(next => {
      this.book = next;
      this.message = 'Book\'s information updated successfully!';
    }, error => {
      this.message = 'Cannot update book\'s information. Reason: ' + error.message;
    });
  }

}
