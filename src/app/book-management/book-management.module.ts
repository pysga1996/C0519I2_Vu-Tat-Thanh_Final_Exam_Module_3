import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './book-list/book-list.component';
import { CreateBookComponent } from './create-book/create-book.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { DeleteBookComponent } from './delete-book/delete-book.component';
import { ViewBookComponent } from './view-book/view-book.component';
import {RouterModule, Routes} from '@angular/router';
import {BookService} from './book.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

const config: Routes = [
  { path: 'list', component: BookListComponent },
  { path: 'create', component: CreateBookComponent },
  { path: 'view/:id', component: ViewBookComponent },
  { path: 'edit/:id', component: EditBookComponent },
  { path: 'delete/:id', component: DeleteBookComponent }
];

@NgModule({
  declarations: [BookListComponent, CreateBookComponent, EditBookComponent, DeleteBookComponent, ViewBookComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(config),
    FormsModule
  ],
  providers: [BookService]
})
export class BookManagementModule { }
