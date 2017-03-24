import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable, Subject } from 'rxjs';
import { IEntries } from '../models';



@Injectable()
export class EntryService {

  fetchEntrySubject: Subject<IEntries> = new Subject<IEntries>();

  constructor(
    private http: Http
  ){
  }

  fetchEntry() {

    this.http
      .get(
        `http://localhost:8000/api/entries/`
      )
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
