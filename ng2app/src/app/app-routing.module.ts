import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EntriesComponent } from './components/entries.component';
import { DetailEntryComponent } from './components/detail-entry.component';

const routes: Routes = [
  { path: '', component: EntriesComponent },
  { path: 'detail/:id', component: DetailEntryComponent },
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
