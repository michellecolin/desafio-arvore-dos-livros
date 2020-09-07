import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recordings',
  templateUrl: './recordings.component.html',
  styleUrls: ['./recordings.component.scss']
})
export class RecordingsComponent implements OnInit {
  @Input() audio;
  @Input() tooltip
  @Input() monkey;
  @Input('page')
  set page(value) {
    this._page = value;
    this.initPlayer();
  }

  @Input() type;

  public playing = false;
  public _page;
  public hasAudios;
  public audios;

  constructor() { }

  ngOnInit(): void {
    console.log('page', this._page);
    console.log('type', this.type);
  }

  initPlayer() {
    console.log(this.audio[this._page]);
    if (this.audio[this._page]?.length > 0) {
      this.hasAudios = true;
      this.audios = this.audio[this._page];
    } else {
      this.hasAudios = false;
    }
  }
  /*playAudio() {
    console.log('play audio', this.audio);
    this.playing = true;
    /*const audio = new Audio(this.audio);
    console.log(audio);
    audio.play();
  }*/
}
