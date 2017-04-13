import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';

import { DetailEntryService } from '../services/detail-entry.service';
import { DetailEntryStore } from '../stores/detail-entry.store';
import { IEntry } from '../models/detail-entry.model';

import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'my-detail-entry',
  templateUrl: '../templates/detail-entry.component.html',
  styleUrls: ['../static/detail-entry.component.css']
})
export class DetailEntryComponent implements OnInit{
  title = 'エントリ詳細';

  public constructor(
    private route: ActivatedRoute,
    private detailentryService: DetailEntryService,
    private detailentryStore: DetailEntryStore,
  ){}

  ngOnInit(): void{
    this.detailentryService.getEntry(0)
  }
}
