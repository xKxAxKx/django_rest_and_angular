import { Component } from '@angular/core';
import { EntryService } from '../services/entry';
import { EntryStore } from '../stores/entry';
import { IEntry } from '../models';



@Component({
  selector: 'entries',
  template: `
    <h1>Entry</h1>
    <button (click)="fetchUser()">ユーザーを取得</button>
    <ul>
      <li *ngFor="let entry of entryStore.entries">
        <dl>
          <dt>Title :</dt>
          <dd>{{ entry.title }}</dd>
          <dt>Body :</dt>
          <dd>{{ entry.body }}</dd>
          <dt>投稿日時 :</dt>
          <dd>{{ entry.created_at | date: 'yyyy/M/d(EEE) HH:mm' }}</dd>
        </dl>
      </li>
    </ul>
  `
})
export class EntriesComponent {

  constructor(
    private entryService: EntryService,
    private entryStore: EntryStore
  ) {
  }

  fetchEntry() {
    this.entryService.fetchEntry();
  }
}
