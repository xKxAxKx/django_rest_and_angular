import { Injectable } from "@angular/core";
import { Http } from '@angular/http';
import { RequestOptions, URLSearchParams, Jsonp, Response, RequestOptionsArgs } from "@angular/http";
import { Observable, Subject } from  "rxjs";
import "rxjs/add/operator/map";

import { IEntry } from '../models/detail-entry.model';

@Injectable()
export class DetailEntryService {

  fetchEntrySubject: Subject<IEntry> = new Subject<IEntry>();

  constructor(
    private http: Http
  ){}

  // http://127.0.0.1:8000/api/entries/idの取得
  getEntry(id: number){
    this.http
      .get(`http://127.0.0.1:8000/api/entries/` + id)
      .map(res => res.json())
      .subscribe(
        (res) => {
          this.fetchEntrySubject.next(res);
        },
        (err) => {
          console.error(err);
        },
        () => {}
      );
  }
}
