import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router'

import { EventComponent } from "./event.component";
import { EventDetailComponent } from "./detail/event.detail.component";
import { EventListComponent } from "./list/event.list.component";


const eventRoutes: Routes = [
    { path: 'events', component: EventListComponent},
    { path: 'event/:id', component: EventDetailComponent }
];

@NgModule({
    imports: [RouterModule.forChild(eventRoutes)],
    exports: [RouterModule]
})

export class EventRoutingModule { }