import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { EntriesComponent } from './components/entries.component';
import { EntriesService } from './services/entries.service';
import { DetailEntryComponent } from './components/detail-entry.component';
import { DetailEntryService } from './services/detail-entry.service';
import { DetailEntryStore } from './stores/detail-entry.store';


@NgModule({
  declarations: [
    AppComponent,
    EntriesComponent,
    DetailEntryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    EntriesService,
    DetailEntryService,
    DetailEntryStore
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
