import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  books = [
    {
      name: 'Cabelo bom é o que?',
      img: 'cabelo-bom-o-que-e.jpg',
      pdf: 'cabelo-bom-e-o-que.pdf',
      author: 'Rodrigo Goecks',
      interactive: true
    },
    {
      name: 'Sai fora, coronavírus!',
      img: 'sai-fora-coronavirus.jpg',
      pdf: 'sai-fora-coronavirus.pdf',
      author: 'China Children\'s Press & Publication Group',
    },
    {
      name: 'Mínimos contos',
      img: 'minimos-contos.jpg',
      pdf: 'minimos-contos.pdf',
      author: 'Benita Prieto (Org.)'
    },
    {
      name: 'O devaneio no jardim',
      img: 'o-devaneio-no-jardim.jpg',
      pdf: 'o-devaneio-no-jardim.pdf',
      author: 'Márcio Wilian'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
