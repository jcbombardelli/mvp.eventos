import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router'

import { IndexComponent } from "./partials/index/index.component";
import { EventComponent } from "./partials/event/event.component";


const appRoutes: Routes = [
    { path: '', component: IndexComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }