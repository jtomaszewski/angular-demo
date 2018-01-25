import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRepo } from './app-repo.service';
import { InputComponent } from './input/input.component';


@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    AppRepo,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
