import { Injectable } from '@angular/core';

@Injectable()
export class EventService {


  private events: any[] = [

    { id: 1, name: "Peça 001", category: "Teatro", photo: "../../../assets/img/portfolio/thumbnails/1.jpg" },
    { id: 2, name: "Peça 002", category: "Teatro", photo: "../../../assets/img/portfolio/thumbnails/1.jpg" },
    { id: 3, name: "Peça 003", category: "Teatro", photo: "../../../assets/img/portfolio/thumbnails/1.jpg" }

  ];

  getLastSixEvents() {
    return this.events;
  }

  getEvent(id: Number){

  }

  constructor() { }

}
