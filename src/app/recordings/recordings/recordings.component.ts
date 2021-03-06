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
  public showAudiosList;
  public playingAudio;

  constructor() { }

  ngOnInit(): void {
  }

  initPlayer() {
    this.playingAudio = false;
    if (this.audio[this._page]?.length > 0) {
      this.hasAudios = true;
      this.audios = this.audio[this._page];
    } else {
      this.hasAudios = false;
      this.showAudiosList = false;
    }
  }

  showMessage() {
    alert('O botão de gravar está aqui somente para fins demonstrativos. Essa funcionalidade não foi abrangida nesta vesão do protótipo');
  }
}
