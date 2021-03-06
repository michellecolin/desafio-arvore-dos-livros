import { Component, OnInit } from '@angular/core';
import { BoookService } from 'src/app/services/book.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {
  public book;
  
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

}
