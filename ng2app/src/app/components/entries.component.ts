import { Component, OnInit } from '@angular/core';

import { EntriesService } from '../services/entries.service';
import { EntriesStore } from '../stores/entries.store';
import { IEntries, IResults } from '../models/entries.model';


@Component({
  selector: 'my-entries',
  templateUrl: '../templates/entries.component.html',
  styleUrls: ['../static/entries.component.css']
})
export class EntriesComponent implements OnInit{
  title = 'エントリ一覧';

  public constructor(
    private entriesService: EntriesService,
    private entriesStore: EntriesStore,
  ){}

  ngOnInit() {
    //エントリ情報を取得
    this.entriesService.getEntries('0');
  }
}
