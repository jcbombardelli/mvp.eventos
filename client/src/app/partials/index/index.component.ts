import { Component, OnInit } from '@angular/core';
import { EventService } from "../event/event.service";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: [
    '../../../assets/vendor/bootstrap/css/bootstrap.min.css',    
    '../../../assets/vendor/magnific-popup/magnific-popup.css',
    '../../../assets/css/creative.css',
    './index.component.css']
})
export class IndexComponent implements OnInit {


  private events : any[];

  constructor(private eventService : EventService) { }

  ngOnInit() {
     this.events = this.eventService.getLastSixEvents();
  }

}
