import { Injectable } from "@angular/core";
import { Http } from '@angular/http';
import { RequestOptions, URLSearchParams, Jsonp, Response, RequestOptionsArgs } from "@angular/http";
import { Observable, Subject } from  "rxjs";
import "rxjs/add/operator/map";

import { IEntries, IResults } from '../models/entries.model';

@Injectable()
export class EntriesService {

  fetchEntrySubject: Subject<IEntries> = new Subject<IEntries>();

  constructor(
    private http: Http
  ){
  }

  // http://127.0.0.1:8000/api/entries/の取得
  getEntries(page){
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
}
