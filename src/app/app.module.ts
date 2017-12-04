import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRepo } from './app-repo.service';
import { DemoSyncComponent } from './demo-sync/demo-sync.component';
import { DemoAsyncComponent } from './demo-async/demo-async.component';


@NgModule({
  declarations: [
    AppComponent,
    DemoSyncComponent,
    DemoAsyncComponent,
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
