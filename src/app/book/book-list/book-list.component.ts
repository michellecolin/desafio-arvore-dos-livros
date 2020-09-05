import { Component, OnInit } from '@angular/core';
import { BoookService } from './../../services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  public books;

  constructor(private bookService: BoookService) { }

  ngOnInit(): void {
    this.books = this.bookService.books;
  }

}
