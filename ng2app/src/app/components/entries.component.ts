import { Component, OnInit } from '@angular/core';
import { EntriesService } from '../services/entries.service';
import { IEntries } from '../models/entries.model';


@Component({
  selector: 'my-entries',
  templateUrl: '../templates/entries.component.html',
  styleUrls: ['../static/entries.component.css']
})
export class EntriesComponent implements OnInit{
  title = 'entries';
  entries: IEntries[] = [];
  error: any;

  public constructor(
    private entriesService: EntriesService,
  ){}

  getEntires(page :number) {
    this.entriesService
      .getEntries(page)
      .then(entries => this.entries = entries)
      .catch(error => this.error = error);
  }

  ngOnInit() {
    this.getEntires(1);
  }
}
