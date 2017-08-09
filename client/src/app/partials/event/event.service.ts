import { Injectable } from '@angular/core';

@Injectable()
export class EventService {


  private events: any[] = [

    { id: 1, name: "Uma noite dessas!", category: "Espetaculo de Teatro", photo: "../../../assets/img/portfolio/thumbnails/peca001.png" },
    { id: 2, name: "Proparoxítona", category: "Espetaculo de Teatro", photo: "../../../assets/img/portfolio/thumbnails/peca002.png" },
    { id: 3, name: "Sociedade dos poetas mortos", category: "Espetaculo de Teatro", photo: "../../../assets/img/portfolio/thumbnails/peca003.jpeg" }

  ];

  getLastSixEvents() {
    return this.events;
  }

  getEvent(id: Number){

  }

  constructor() { }

}
