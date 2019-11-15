import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  endpoint = environment.apiURL;

  constructor(
    private _http: HttpClient
  ) { }

  getData(url): Observable<any> {
    return this._http.get(`${this.endpoint}/${url}`);
  }

  postData(url, data): Observable<any> {
    return this._http.post(`${this.endpoint}/${url}`, data);
  }
}
