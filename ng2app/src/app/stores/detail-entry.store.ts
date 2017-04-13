import { Injectable } from '@angular/core';

import { IEntry } from '../models/detail-entry.model';
import { DetailEntryService } from '../services/detail-entry.service';

@Injectable()
export class DetailEntryStore {

  entry: IEntry;

  constructor(
    private detailentryService: DetailEntryService){
      // 取得したエントリをストアに格納
      this.detailentryService.fetchEntrySubject.subscribe(
        entry => this.entry = entry
      );
  }
}
