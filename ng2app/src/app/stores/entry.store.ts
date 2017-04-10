import { Injectable } from '@angular/core';
import { IEntries, IEntry } from '../models/entry.model';
import { EntryService } from '../services/entry.service';



@Injectable()
export class EntryStore {

  entries: IEntry[] = [];

  constructor(
    private entryService: EntryService
  ){

    // 取得したエントリをストアに格納
    this.entryService.fetchEntrySubject.subscribe(
      (entries: IEntries) => {
        this.entries = entries.results;
      }
    );
  }
}
