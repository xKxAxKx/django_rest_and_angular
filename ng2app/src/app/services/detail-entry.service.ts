import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import 'rxjs/add/operator/toPromise';

import { IEntry } from '../models/entries.model';

@Injectable()
export class DetailEntryService {

  constructor(
    private http: Http
  ){
  }

  getEntry(id: number){
    return this.http
      .get(`http://127.0.0.1:8000/api/entries/` +id)
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
