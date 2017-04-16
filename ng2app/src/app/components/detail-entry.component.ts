import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { DetailEntryService } from '../services/detail-entry.service';
import { IEntry } from '../models/entries.model';


@Component({
  selector: 'my-detail-entry',
  templateUrl: '../templates/detail-entry.component.html',
  styleUrls: ['../static/detail-entry.component.css']
})
export class DetailEntryComponent implements OnInit{
  title = 'entry';
  entry: IEntry[] = [];
  error: any;
  id: number;

  public constructor(
    private route: ActivatedRoute,
    private detailEntryService: DetailEntryService,
  ){}

  getEntry(id :number) {
    this.detailEntryService
      .getEntry(id)
      .then(entry => this.entry = entry)
      .catch(error => this.error = error);
  }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.getEntry(params['id']))
      .subscribe(entry => this.entry = entry);
  }
}
