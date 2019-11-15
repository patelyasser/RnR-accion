import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from "../../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  endpoint = `${environment.notificationURL}/api`;
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  };

  constructor(
    private _http: HttpClient
  ) { }

  sendMail(data): Observable<any> {
    return this._http.post(`${this.endpoint}/send`, data, this.httpOptions);
  }

}
