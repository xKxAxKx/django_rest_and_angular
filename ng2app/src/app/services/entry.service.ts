import { Injectable } from "@angular/core";
import { Http } from '@angular/http';
import { RequestOptions, URLSearchParams, Jsonp, Response, RequestOptionsArgs } from "@angular/http";
import { Observable, Subject } from  "rxjs";
import "rxjs/add/operator/map";

import { IEntries, IEntry } from '../models/entry.model';

@Injectable()
export class EntryService {

  fetchEntrySubject: Subject<IEntries> = new Subject<IEntries>();

  constructor(
    private http: Http
  ){
  }

  // 新規ユーザーの取得
  getEntries(page) {
    this.http
      .get(`http://127.0.0.1:8000/api/entries/?limit=5&offset=` + page)
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

  getEntry(id) {
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
