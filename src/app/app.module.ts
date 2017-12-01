import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRepo } from './app-repo.service';
import { DemoCdDefaultComponent } from './demo-cd-default/demo-cd-default.component';
import { DemoCdOnPushComponent } from './demo-cd-on-push/demo-cd-on-push.component';
import { DemoCdDetachedComponent } from './demo-cd-detached/demo-cd-detached.component';


@NgModule({
  declarations: [
    AppComponent,
    DemoCdDefaultComponent,
    DemoCdOnPushComponent,
    DemoCdDetachedComponent
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
