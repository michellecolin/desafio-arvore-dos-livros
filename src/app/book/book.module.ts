import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookReaderComponent } from './book-reader/book-reader.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookListComponent } from './book-list/book-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { RecordingsModule } from '../recordings/recordings.module';


@NgModule({
  declarations: [BookReaderComponent, BookDetailsComponent, BookListComponent],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule,
    NgxExtendedPdfViewerModule,
    RecordingsModule,
  ]
})
export class BookModule { }
