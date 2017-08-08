import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventComponent } from "./event.component";
import { EventListComponent } from './list/event.list.component';
import { EventDetailComponent } from './detail/event.detail.component';
import { EventRoutingModule } from "./event.routing.module";
import { EventService } from "./event.service";

@NgModule({
  imports: [
    CommonModule,
    EventRoutingModule
  ],
  declarations: [
    EventComponent, 
    EventListComponent, 
    EventDetailComponent
  ],
  providers: [EventService]
})
export class EventModule { }
