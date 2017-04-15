import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import 'rxjs/add/operator/toPromise';

import { IEntries } from '../models/entries.model';

@Injectable()
export class EntriesService {

  constructor(
    private http: Http
  ){
  }

  getEntries(){
    return this.http
      .get(`http://127.0.0.1:8000/api/entries/`)
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
