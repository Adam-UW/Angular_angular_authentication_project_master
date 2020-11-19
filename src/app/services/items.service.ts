import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Items } from '../models/items';


// For cross origin
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
   // URL to web api
   private companyUrl = 'http://localhost:5000/api/items';

  constructor(private http: HttpClient) { }

  addItems(items): Observable<any> {
    return this.http.post<any>(this.companyUrl, items, httpOptions);
  }

  getItems(): Observable<Items[]>{
    return this.http.get<Items[]>(this.companyUrl);
  }



}
