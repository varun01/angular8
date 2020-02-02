import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  constructor(private httpClient: HttpClient){

  }

  public getData=(): Observable<any> =>{
    return this.httpClient.get<any>(environment.api.users).pipe(map(response => {
      return response;
    }));
  }
  
}
