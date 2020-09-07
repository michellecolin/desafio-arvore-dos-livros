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
      description: 'Essa é a história da Maria Filó, uma menina alegre e esperta, que curte seus cabelos cacheados de montão! Sabe o que ela descobriu? Que cada um nasce de um jeito, com diversos tipos de cabelo, e que ser cacheada é muito legal! Como são lindos os cachinhos da Maria Filó...',
      audios: {
        teatcher: {
          context: './assets/audios/cabelo-bom-e-o-que/teacther/context.ogg',
          question: './assets/audios/cabelo-bom-e-o-que/teacther/question.mp3'
        },
        pages: {
          2: [
            { 
              name: 'Isadora',
              id: '3',
              url: './assets/audios/cabelo-bom-e-o-que/isadora-page-2.ogg',
              avatar: 'https://images.pexels.com/photos/1068205/pexels-photo-1068205.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
            }
          ],
          3: [
          ],
          4: [
            { 
              name: 'Isadora',
              id: '3',
              url: './assets/audios/cabelo-bom-e-o-que/isadora-page-1.ogg',
              avatar: 'https://images.pexels.com/photos/1068205/pexels-photo-1068205.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
            }
          ],
          5: [
            { 
              name: 'Isadora',
              id: '3',
              url: './assets/audios/cabelo-bom-e-o-que/isadora-page-3.ogg',
              avatar: 'https://images.pexels.com/photos/1068205/pexels-photo-1068205.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
            },
            { 
              name: 'Bruno',
              id: '2',
              url: './assets/audios/cabelo-bom-e-o-que/santiago-page-5.mp3',
              avatar: 'https://images.pexels.com/photos/289923/pexels-photo-289923.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
            }
          ],
          6: [
            { 
              name: 'Isadora',
              id: '3',
              url: './assets/audios/cabelo-bom-e-o-que/isadora-page-4.ogg',
              avatar: 'https://images.pexels.com/photos/1068205/pexels-photo-1068205.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
            },
            { 
              name: 'Michelle',
              id: '1',
              url: './assets/audios/cabelo-bom-e-o-que/michelle-page-6.mp3',
              avatar: 'https://media-exp1.licdn.com/dms/image/C4D03AQHaKLwz1vTivg/profile-displayphoto-shrink_200_200/0?e=1605139200&v=beta&t=YosS6UAcpD_IOq77JzjmtohT25qATYxOCkvZg447UEY'
            },
            { 
              name: 'Bruno',
              id: '2',
              url: './assets/audios/cabelo-bom-e-o-que/santiago-page-6.mp3',
              avatar: 'https://images.pexels.com/photos/289923/pexels-photo-289923.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
            }
          ],
          7: [
            { 
              name: 'Isadora',
              id: '3',
              url: './assets/audios/cabelo-bom-e-o-que/isadora-page-5.ogg',
              avatar: 'https://images.pexels.com/photos/1068205/pexels-photo-1068205.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
            },
            { 
              name: 'Michelle',
              id: '1',
              url: './assets/audios/cabelo-bom-e-o-que/michelle-page-7.mp3',
              avatar: 'https://media-exp1.licdn.com/dms/image/C4D03AQHaKLwz1vTivg/profile-displayphoto-shrink_200_200/0?e=1605139200&v=beta&t=YosS6UAcpD_IOq77JzjmtohT25qATYxOCkvZg447UEY'
            },
            { 
              name: 'Bruno',
              id: '2',
              url: './assets/audios/cabelo-bom-e-o-que/santiago-page-7.mp3',
              avatar: 'https://images.pexels.com/photos/289923/pexels-photo-289923.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
            }
          ],
          8: [
            { 
              name: 'Isadora',
              id: '3',
              url: './assets/audios/cabelo-bom-e-o-que/isadora-page-6.ogg',
              avatar: 'https://images.pexels.com/photos/1068205/pexels-photo-1068205.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
            },
            { 
              name: 'Michelle',
              id: '1',
              url: './assets/audios/cabelo-bom-e-o-que/michelle-page-8.mp3',
              avatar: 'https://media-exp1.licdn.com/dms/image/C4D03AQHaKLwz1vTivg/profile-displayphoto-shrink_200_200/0?e=1605139200&v=beta&t=YosS6UAcpD_IOq77JzjmtohT25qATYxOCkvZg447UEY'
            },
            { 
              name: 'Bruno',
              id: '2',
              url: './assets/audios/cabelo-bom-e-o-que/santiago-page-8.mp3',
              avatar: 'https://images.pexels.com/photos/289923/pexels-photo-289923.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
            }
          ],
          9: [
            { 
              name: 'Isadora',
              id: '3',
              url: './assets/audios/cabelo-bom-e-o-que/isadora-page-7.ogg',
              avatar: 'https://images.pexels.com/photos/1068205/pexels-photo-1068205.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
            },
            { 
              name: 'Michelle',
              id: '1',
              url: './assets/audios/cabelo-bom-e-o-que/michelle-page-9.mp3',
              avatar: 'https://media-exp1.licdn.com/dms/image/C4D03AQHaKLwz1vTivg/profile-displayphoto-shrink_200_200/0?e=1605139200&v=beta&t=YosS6UAcpD_IOq77JzjmtohT25qATYxOCkvZg447UEY'
            },
            { 
              name: 'Bruno',
              id: '2',
              url: './assets/audios/cabelo-bom-e-o-que/santiago-page-9.mp3',
              avatar: 'https://images.pexels.com/photos/289923/pexels-photo-289923.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
            }
          ],
          10: [
            { 
              name: 'Isadora',
              id: '3',
              url: './assets/audios/cabelo-bom-e-o-que/isadora-page-8.ogg',
              avatar: 'https://images.pexels.com/photos/1068205/pexels-photo-1068205.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
            },
            { 
              name: 'Michelle',
              id: '1',
              url: './assets/audios/cabelo-bom-e-o-que/michelle-page-10.mp3',
              avatar: 'https://media-exp1.licdn.com/dms/image/C4D03AQHaKLwz1vTivg/profile-displayphoto-shrink_200_200/0?e=1605139200&v=beta&t=YosS6UAcpD_IOq77JzjmtohT25qATYxOCkvZg447UEY'
            },
            { 
              name: 'Bruno',
              id: '2',
              url: './assets/audios/cabelo-bom-e-o-que/santiago-page-10.mp3',
              avatar: 'https://images.pexels.com/photos/289923/pexels-photo-289923.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
            }
          ],
          11: [
            { 
              name: 'Isadora',
              id: '3',
              url: './assets/audios/cabelo-bom-e-o-que/isadora-page-9.ogg',
              avatar: 'https://images.pexels.com/photos/1068205/pexels-photo-1068205.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
            },
            { 
              name: 'Michelle',
              id: '1',
              url: './assets/audios/cabelo-bom-e-o-que/michelle-page-11.mp3',
              avatar: 'https://media-exp1.licdn.com/dms/image/C4D03AQHaKLwz1vTivg/profile-displayphoto-shrink_200_200/0?e=1605139200&v=beta&t=YosS6UAcpD_IOq77JzjmtohT25qATYxOCkvZg447UEY'
            },
            { 
              name: 'Bruno',
              id: '2',
              url: './assets/audios/cabelo-bom-e-o-que/santiago-page-11.mp3',
              avatar: 'https://images.pexels.com/photos/289923/pexels-photo-289923.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
            }
          ]
        }  
      }
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
