import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { WallComponent } from './wall/wall.component';

import { UserService } from "./user/user.service";
import { WallService } from "./wall/wall.service";

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    WallComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [UserService, WallService],
  bootstrap: [AppComponent]
})
export class AppModule { }
