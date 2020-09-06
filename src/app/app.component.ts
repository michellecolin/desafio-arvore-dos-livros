import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationCancel } from '@angular/router';
import 'jquery';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public pdfView;

  constructor(
    private router: Router
  ) {}
  
  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        if (event.url.includes('read')) {
          this.pdfView = true;
          window.addEventListener('click', this.toggleMenu , false);
          
          setTimeout(() => {
            $('.main-nav').show();
          },10);

        } else {
          this.pdfView = false;
          $( ".main-nav" ).show();
          window.removeEventListener('click', this.toggleMenu , false);
        }
      }
    });
  }

  toggleMenu() {
    $('.main-nav').toggle();
  }
}
