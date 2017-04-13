import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { EntriesComponent } from './components/entries.component';
import { EntriesService } from './services/entries.service';
import { EntriesStore } from './stores/entries.store';


@NgModule({
  declarations: [
    AppComponent,
    EntriesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    EntriesService,
    EntriesStore
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
