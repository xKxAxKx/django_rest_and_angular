import { Component, OnInit } from '@angular/core';
import { EntriesService } from '../services/entries.service';
import { IEntries } from '../models/entries.model';


@Component({
  selector: 'my-entries',
  templateUrl: '../templates/entries.component.html',
  styleUrls: ['../static/entries.component.css']
})
export class EntriesComponent implements OnInit{
  title = 'エントリ一覧';
  entries: IEntries[] = [];
  error: any;

  public constructor(
    private entriesService: EntriesService,
  ){}

  getEntires() {
    this.entriesService
      .getEntries()
      .then(entries => this.entries = entries)
      .catch(error => this.error = error);
  }

  ngOnInit() {
    //エントリ情報を取得
    // this.entriesService.getEntries(0);
    this.getEntires();
  }
}
