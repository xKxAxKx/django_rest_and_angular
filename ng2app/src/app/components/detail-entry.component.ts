import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';

import { DetailEntryService } from '../services/detail-entry.service';
import { IEntry } from '../models/entries.model';


@Component({
  selector: 'my-detail-entry',
  templateUrl: '../templates/detail-entry.component.html',
  styleUrls: ['../static/detail-entry.component.css']
})
export class DetailEntryComponent implements OnInit{
  title = 'entry';
  entries: IEntry[] = [];
  error: any;

  public constructor(
    private detailEntryService: DetailEntryService,
  ){}

  getEntry(id :number) {
    this.detailEntryService
      .getEntry(id)
      .then(entries => this.entries = entries)
      .catch(error => this.error = error);
  }

  ngOnInit() {
    this.getEntry(1);
  }
}
