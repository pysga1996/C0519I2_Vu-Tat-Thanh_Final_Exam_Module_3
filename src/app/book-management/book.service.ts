import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Book} from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  apiUrl = environment.apiUrl;
  constructor(private httpClient: HttpClient) { }

  getBookList(): Observable<Book[]> {
    const url = `${this.apiUrl}/books`;
    return this.httpClient.get<Book[]>(url);
  }

  getBook(id: number): Observable<Book> {
    const url = `${this.apiUrl}/book/${id}`;
    return this.httpClient.get<Book>(url);
  }

  createBook(book: Book): Observable<Book> {
    const url = `${this.apiUrl}/books`;
    const body = JSON.stringify(book);
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.post<Book>(url, body, {headers});
  }

  editBook(id: number, book: Book): Observable<Book> {
    const url = `${this.apiUrl}/books/${id}`;
    book.id = id;
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.put<Book>(url, book, {headers});
  }

  deleteBook(id: number): Observable<Book> {
    const url = `${this.apiUrl}/books/${id}`;
    return this.httpClient.delete<Book>(url);
  }
}
