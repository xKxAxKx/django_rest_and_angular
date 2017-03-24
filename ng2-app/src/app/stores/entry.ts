import { Injectable } from '@angular/core';
import { IEntries, IEntry } from '../models';
import { EntryService } from '../services/entry';


@Injectable()
export class EntryStore {

  entries: IEntry[] = [];

  constructor(
    private entryService: EntryService
  ){

    this.entryService.fetchEntrySubject.subscribe(
      (entries: IEntries) => {
        this.entries = entries.results;
      }
    );
  }
}
