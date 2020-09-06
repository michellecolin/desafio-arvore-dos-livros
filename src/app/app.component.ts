import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, ActivatedRoute } from '@angular/router';
import 'jquery';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public pdfView;
  public book;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}
  
  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        if (event.url.includes('read')) {
          this.book = event.url.split('/')[2];
          this.pdfView = true;
          window.addEventListener('click', this.toggleMenu , false);
          
          setTimeout(() => {
            $('.main-nav').show();
            $('.next-button').show();
            $('.previous-button').show();
          },10);
        } else {
          this.pdfView = false;
          $('.main-nav').show();
          window.removeEventListener('click', this.toggleMenu , false);
        }
      }
    });
  }

  toggleMenu(event) {
    if (
      event.target.parentNode.classList[0] !== 'toolbarButton' && 
      event.target.parentNode.classList[0] !== 'next-button' &&
      event.target.parentElement.nodeName !== 'PDF-NEXT-PAGE' && 
      event.target.parentElement.nodeName !== 'PDF-PREVIOUS-PAGE' && 
      event.target.parentNode.tagName !== 'svg' && 
      !event.target.textContent.includes('keyboard_arrow_left') &&
      !event.target.textContent.includes('keyboard_arrow_right') &&
      !event.path.find(p => p?.className?.includes('book-context')) &&
      !event.path.find(p => p?.className?.includes('audio-menu'))
    ) { //Click is not coming from the buttons that switch the page
      $('.main-nav').toggle();
      $('.next-button').toggle();
      $('.previous-button').toggle();
    }
  }
}
