import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecordComponent } from './record/record.component';
import { RecordingsComponent } from './recordings/recordings.component';



@NgModule({
  declarations: [RecordComponent, RecordingsComponent],
  imports: [
    CommonModule
  ]
})
export class RecordingsModule { }
