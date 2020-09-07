import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecordComponent } from './record/record.component';
import { RecordingsComponent } from './recordings/recordings.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxAudioPlayerModule } from 'ngx-audio-player';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [RecordComponent, RecordingsComponent],
  imports: [
    CommonModule,
    NgbModule,
    NgxAudioPlayerModule,
    MatIconModule
  ],
  exports: [
    RecordComponent,
    RecordingsComponent
  ]
})
export class RecordingsModule { }
