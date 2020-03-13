import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {API_URL} from '../env';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  private static _handleError(err: HttpErrorResponse | any) {
    return Observable.throw(err.message || 'Error: Unable to complete request.');
  }

  // GET list of public, future events
  getMedicines() {
    return this.http
      .get(`${API_URL}/getMedicines`);
  }

  apiMedicine(medicineid){
    return this.http
      .get(`${API_URL}/medicines/`+ medicineid);
  }

  apiPostUser(userObj){
    return this.http
      .post(`${API_URL}/postUser`, userObj);
  }

  apiGetUser(userEmail){
    return this.http
      .get(`${API_URL}/users/`+ userEmail);
  }
}
