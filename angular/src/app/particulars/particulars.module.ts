import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ShareModule } from "../share";
import { ParticularsContainerComponent, ParticularsCardComponent } from "./components";
import { ParticularsRoutingModule } from "./particulars-routing.module";
@NgModule({
  declarations: [ParticularsContainerComponent, ParticularsCardComponent],
  imports: [CommonModule, ShareModule, ParticularsRoutingModule],
  exports: [ParticularsContainerComponent],
  providers: []
})
export class ParticularsModule { }
