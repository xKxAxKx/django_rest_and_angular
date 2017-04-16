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

  getEntries(page: number){
    return this.http
      .get(`http://127.0.0.1:8000/api/entries/?limit=5&offset=` +((page * 5)-5))
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
