import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ShareModule } from "../share";
import { ParticularsCardComponent } from "./components";

@NgModule({
  declarations: [ParticularsCardComponent],
  imports: [CommonModule, ShareModule],
  exports: [ParticularsCardComponent],
  providers: [],
  entryComponents: []
})
export class ParticularsModule { }
