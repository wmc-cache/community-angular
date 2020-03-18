import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";

import { ParticularsContainerComponent } from "./components";

const routes: Routes = [
  {
    path: "particulars",
    children: [
      {
        path: ":id",
        component: ParticularsContainerComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParticularsRoutingModule {


}
