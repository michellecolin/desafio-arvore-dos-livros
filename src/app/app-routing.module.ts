import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookDetailsComponent } from './book/book-details/book-details.component';
import { BookListComponent } from './book/book-list/book-list.component';
import { BookReaderComponent } from './book/book-reader/book-reader.component';

const routes: Routes = [  {
    path: '',
    pathMatch: 'full',
    component: BookListComponent,
    data: { title: 'Home' }
  },
  {
    path: 'book/:id',
    component: BookDetailsComponent,
    data: { title: 'Detalhes do livro' }
  },
  {
    path: 'book/:id/read',
    component: BookReaderComponent,
    data: { title: 'Livro' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
