import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

import { IndexComponent } from "./index.component";
import { EventModule } from "../event/event.module";

@NgModule({
  imports: [
    CommonModule, 
    RouterModule, 
    EventModule],

  declarations: [
    IndexComponent
  ]

})
export class IndexModule { }
