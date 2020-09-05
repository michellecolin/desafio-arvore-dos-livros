import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BoookService {
  public books = [
    {
      id: 'cabelo-bom-o-que-e',
      name: 'Cabelo bom é o que?',
      img: 'cabelo-bom-o-que-e.jpg',
      pdf: 'cabelo-bom-e-o-que.pdf',
      author: 'Rodrigo Goecks',
      interactive: true,
      publisher: 'RDG',
      edition: '1° edição',
      description: 'Essa é a história da Maria Filó, uma menina alegre e esperta, que curte seus cabelos cacheados de montão! Sabe o que ela descobriu? Que cada um nasce de um jeito, com diversos tipos de cabelo, e que ser cacheada é muito legal! Como são lindos os cachinhos da Maria Filó...'
    },
    {
      id: 'sai-fora-coronavirus',
      name: 'Sai fora, coronavírus!',
      img: 'sai-fora-coronavirus.jpg',
      pdf: 'sai-fora-coronavirus.pdf',
      author: 'China Children\'s Press & Publication Group',
      publisher: 'Pipa',
      edition: '1° edição',
      description: 'Sai fora, coronavírus! é um livro ilustrado digital gratuito criado para o público infantil com orientações para que as famílias possam se proteger e compreender os cuidados que devem ser tomados, para evitar o contágio e compreender as angustias emocionais que estão vivenciando.'
    },
    {
      id: 'minimos-contos',
      name: 'Mínimos contos',
      img: 'minimos-contos.jpg',
      pdf: 'minimos-contos.pdf',
      author: 'Benita Prieto (Org.)',
      publisher: 'Benita Prieto Produções',
      edition: '1° edição',
      description: 'Livro feito exclusivamente para a internet, com microcontos de suspense escritos em 140 caracteres, num concurso realizado pelo Simpósio Internacional de Contadores de Histórias. Trinta escritores nacionais e estrangeiros, profissionais e estreantes, foram os vencedores desse certame.',
    },
    {
      id: 'o-devaneio-no-jardim',
      name: 'O devaneio no jardim',
      img: 'o-devaneio-no-jardim.jpg',
      pdf: 'o-devaneio-no-jardim.pdf',
      publisher: 'Independente',
      edition: '1° edição',
      description: 'Fugindo do nazismo que se alastrava pela Europa no final da década de 1930, Thomas embarca numa jornada incerta. Acaba parando em uma floresta misteriosa, habitada por animais falantes e vaga em busca de uma saída. O caminho se torna menos estável quando ele descobre que o lugar vive sob uma ameaça constante e que ela pode impedir o seu regresso.',
      author: 'Márcio Wilian'
    }
  ];

  getBook(id) {
    return this.books.find(book => book.id === id);
  }
}
