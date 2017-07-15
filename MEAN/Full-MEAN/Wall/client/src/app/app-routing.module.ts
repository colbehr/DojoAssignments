import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from "./user/user.component"
import { WallComponent } from "./wall/wall.component"
const routes: Routes = [
    { path: "", component: UserComponent },
    { path: "wall", component: WallComponent },
    // { path: "", pathMatch: "full", redirectTo: "/login" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
