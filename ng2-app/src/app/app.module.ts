import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { EntriesComponent } from './components/entries';
import { EntryService } from './services/entry';
import { EntryStore } from './stores/entry';



@NgModule({
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    EntriesComponent
  ],
  providers: [
    EntryService,
    EntryStore
  ]
})
export class AppModule {}
