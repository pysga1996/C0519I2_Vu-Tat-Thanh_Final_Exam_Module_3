import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BookService} from '../book.service';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})
export class CreateBookComponent implements OnInit {
  message: string;
  constructor(private route: ActivatedRoute, private bookService: BookService) { }

  ngOnInit() {
  }

  createBook(bookCreateForm) {
    this.bookService.createBook(bookCreateForm.value).subscribe(() => {
      this.message = 'Book \'s information added successfully!';
    }, error => {
      this.message = 'Error when adding book\'s information! Reason: ' + error.message;
    });
  }
}
