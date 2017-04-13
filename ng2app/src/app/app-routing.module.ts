import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EntriesComponent } from './components/entries.component';


const routes: Routes = [
  { path: '', redirectTo: '/entries', pathMatch: 'full' },
  { path: 'entries', component: EntriesComponent },
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
