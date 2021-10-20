import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiFunctionsService <T> {

  constructor(@Inject(String) public configurl : string, public http : HttpClient) { }

  getEmployees() :Observable<T>{
    return this.http.get<T>(this.configurl) ;
  }
  getbyid(id) :Observable<T>{
    return this.http.get<T>(this.configurl+`/${id}`) ;
  }
post(object) :Observable<T>{
 return this.http.post<T>(this.configurl, object);
}
put(object , id):Observable<T>{
  return this.http.put<T>(this.configurl +`/${id}`,object);
}

delete(id) :Observable<T>{
  return this.http.delete<T>(this.configurl + `/${id}`);
}


}
