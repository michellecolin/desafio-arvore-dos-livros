import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookModule } from './book/book.module';
import { RecordingsModule } from './recordings/recordings.module';
import { TeatcherInteractionsModule } from './teatcher-interactions/teatcher-interactions.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BookModule,
    RecordingsModule,
    TeatcherInteractionsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
