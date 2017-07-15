import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { QuotesComponentComponent } from './quotes-component/quotes-component.component';
import { QuotesListComponent } from './quotes-list/quotes-list.component';

@NgModule({
  declarations: [
    AppComponent,
    QuotesComponentComponent,
    QuotesListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
