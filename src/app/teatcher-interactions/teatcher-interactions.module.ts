import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InteractiveQuestionsComponent } from './interactive-questions/interactive-questions.component';
import { BookContextComponent } from './book-context/book-context.component';



@NgModule({
  declarations: [InteractiveQuestionsComponent, BookContextComponent],
  imports: [
    CommonModule
  ]
})
export class TeatcherInteractionsModule { }
