import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { BoookService } from 'src/app/services/book.service';
import { ActivatedRoute, Router } from '@angular/router';
import 'jquery';
import { RecordingsComponent } from 'src/app/recordings/recordings/recordings.component';
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
  public page = 1;
  public lastPage;
  public isLastPage = false;
  public zoom = 'page-fit';

  constructor(
    private bookService: BoookService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    if (window.innerWidth > 1600) {
      this.zoom = 'page-fit';
    } else if (window.innerWidth < 1600 && window.innerWidth > 1300) {
      this.zoom = 'page-actual';
    } else if (window.innerWidth <= 1300) {
      this.zoom = "70%";
    }

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
    this.page = page;
    if (page === 1) {
      this.hideContext = false;
      this.firstPage = true;
      this.isLastPage = false;
    } else {
      this.hideContext = true;
      this.firstPage = false;

      if (page == this.lastPage) {
        this.isLastPage = true;
      } else {
        this.isLastPage = false;
      }
    }
  }

  onPagesLoaded($event) {
    this.pdfLoaded = true;
    this.lastPage = $event.pagesCount;
    console.log('event', this.lastPage)
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    if (window.innerWidth > 1600) {
      this.zoom = 'page-fit';
    } else if (window.innerWidth < 1600 && window.innerWidth > 1300) {
      this.zoom = 'page-actual';
    } else if (window.innerWidth <= 1300) {
      this.zoom = "70%";
    }
  }
}
