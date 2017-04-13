import { Injectable } from '@angular/core';

import { IEntries, IResults } from '../models/entries.model';
import { EntriesService } from '../services/entries.service';

@Injectable()
export class EntriesStore {

  results: IResults[] = [];

  constructor(
    private entryService: EntriesService
  ){

    // 取得したエントリをストアに格納
    this.entryService.fetchEntriesSubject.subscribe(
      (entries: IEntries) => {
        this.results = entries.results;
      }
    );
  }
}
