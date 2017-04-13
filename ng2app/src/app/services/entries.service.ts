import { Injectable } from "@angular/core";
import { Headers, Http } from '@angular/http';
import { RequestOptions, URLSearchParams, Jsonp, Response, RequestOptionsArgs } from "@angular/http";
import { Observable, Subject } from  "rxjs";
import "rxjs/add/operator/map";
import 'rxjs/add/operator/toPromise';


import { IEntries, IResults } from '../models/entries.model';

@Injectable()
export class EntriesService {

  fetchEntriesSubject: Subject<IEntries> = new Subject<IEntries>();

  private headers = new Headers({'Content-Type': 'application/json'});

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
          this.fetchEntriesSubject.next(res);
        },
        (err) => {
          console.error(err);
        },
        () => {}
      );
  }

  getEntries2(page): Promise<IResults[]> {
    return this.http.get(`http://127.0.0.1:8000/api/entries/?limit=5&offset=` + page)
      .toPromise()
      .then(response => response.json().data as IResults[]);
  }

}
