import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RegComponentComponent } from './reg-component/reg-component.component';

@NgModule({
  declarations: [
    AppComponent,
    RegComponentComponent
  ],
  imports: [
      FormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
