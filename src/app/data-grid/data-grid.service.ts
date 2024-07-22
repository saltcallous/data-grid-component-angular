import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IData } from '../model/user-interface';

@Injectable({
  providedIn: 'root'
})
export class DataGridService {

  private dataUrl = 'assets/';

  constructor(private http: HttpClient) { }

  getData(searchItem: string): Observable<IData> {
    return this.http.get<IData>(this.dataUrl+searchItem);
  }
}
