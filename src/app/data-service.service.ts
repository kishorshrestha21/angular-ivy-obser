import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class DataServiceService {

  constructor(private _http: HttpClient) { }

url= 'https://jsonplaceholder.typicode.com/users';

jsonData():Observable<any>{
  return this._http.get(this.url);
}

}