import { Component, OnInit } from '@angular/core';
import { BoookService } from 'src/app/services/book.service';
import { ActivatedRoute, Router } from '@angular/router';
import 'jquery';
declare var $: any;

@Component({
  selector: 'app-book-reader',
  templateUrl: './book-reader.component.html',
  styleUrls: ['./book-reader.component.scss']
})
export class BookReaderComponent implements OnInit {
  public book;
  public pdfLoaded;
  public hideContext;
  public firstPage = true;
  
  constructor(
    private bookService: BoookService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params.id) {
        this.book = this.bookService.getBook(params.id);
        if (!this.book) {
          this.router.navigateByUrl('/');
        }
      } else {
        this.router.navigateByUrl('/');
      }
    });
  }

  clickNext() {
    $('#next').click();
  }

  clickPrevious() {
    $('#previous').click();
  }

  pageChanged(page) {
    if (page === 1) {
      this.hideContext = false;
      this.firstPage = true;
    } else {
      this.hideContext = true;
      this.firstPage = false;
    }
  }
}
