import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recordings',
  templateUrl: './recordings.component.html',
  styleUrls: ['./recordings.component.scss']
})
export class RecordingsComponent implements OnInit {
  @Input() audio;

  constructor() { }

  ngOnInit(): void {
  }

  playAudio() {
    console.log('play audio', this.audio);
    const audio = new Audio(this.audio);
    console.log(audio);
    audio.play();
  }
}
