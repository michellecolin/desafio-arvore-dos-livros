import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecordComponent } from './record/record.component';
import { RecordingsComponent } from './recordings/recordings.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [RecordComponent, RecordingsComponent],
  imports: [
    CommonModule,
    NgbModule
  ],
  exports: [
    RecordComponent,
    RecordingsComponent
  ]
})
export class RecordingsModule { }
